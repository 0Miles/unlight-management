import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Head from 'next/head'
import axios, { Canceler } from 'axios'
import { debounce } from 'throttle-debounce'
import { Avatars } from '@/database/entities/Avatars'
import AvatarList from './avatar-list'
import Loading from './loading'

export default function AvatarSearch(props: { keyword?: string, result?: Avatars[] | null }) {
    const router = useRouter()
    const searchParams = useSearchParams()

    const previousKeyword = useRef<any>(props.keyword)
    const inputRef = useRef<HTMLInputElement>(null)
    const cancelSearch = useRef<Canceler | null>(null)
    const previousResult = useRef<any>(null)

    const [result, setResult] = useState<Avatars[] | null>(props.result ?? null)
    const [loading, setLoading] = useState(false)
    const [keyword, setKeyword] = useState(props.keyword ?? null)
    const [expandInput, setExpandInput] = useState(router.pathname === '/avatar')

    const updateKeywordQuery = useCallback((value?: string) => {
        if (!value) {
            delete router.query.keyword
        } else {
            router.query.keyword = value
        }
        router.push(
            {
                pathname: router.pathname,
                query: router.query
            },
            undefined,
            { shallow: true }
        )
    }, [router])

    const onInput = (event: any) => {
        if (!event.target.value) {
            updateKeywordQuery()
        } else {
            onInputDebounce(event)
        }
    }

    const onInputDebounce = debounce(720, (event) => {
        updateKeywordQuery(event.target.value)
    })

    useEffect(() => {
        if (router.isReady) {
            if (router.pathname === '/') {
                setExpandInput(false)
            } else if (router.pathname === '/avatar') {
                setExpandInput(true)
                const queryKeyword = searchParams.get('keyword')
                setKeyword(queryKeyword ?? '')
                if (inputRef.current !== null) {
                    if (queryKeyword) {
                        inputRef.current.focus()
                    }
                    inputRef.current.value = queryKeyword ?? ''
                }
            }
        }
    }, [router.isReady, router.pathname, searchParams])

    useEffect(() => {
        const search = async () => {
            if (keyword && previousKeyword.current === keyword) {
                return
            }
            previousKeyword.current = keyword
            if (cancelSearch.current) {
                cancelSearch.current()
            }

            if (!keyword) {
                setResult(null)
                setLoading(false)
            } else {
                setLoading(true)
                try {
                    const res = await axios.get(
                        `/api/find-avatars?name=${encodeURI(keyword)}`,
                        {
                            cancelToken: new axios.CancelToken((c) => {
                                cancelSearch.current = c
                            })
                        }
                    )
                    if (res.data.length !== previousResult.current?.length || res.data.find((el: any, index: number) => el !== previousResult.current?.[index])) {
                        setResult(res.data)
                        previousResult.current = res.data
                    }
                    setLoading(false)
                } catch (_) { }
            }
        }
        search()
    }, [keyword])

    useEffect(() => {
        const onShortcut = (event: any) => {
            if (event.keyCode === 27) { // esc
                updateKeywordQuery()
                if (inputRef.current !== null) {
                    if (document.activeElement === inputRef.current) {
                        if (!inputRef.current.value) {
                            inputRef.current.blur()
                        }
                    } else {
                        if (inputRef.current.value) {
                            inputRef.current.focus()
                        }
                    }
                    inputRef.current.value = ''
                    setKeyword('')
                }
            } else if ((event.metaKey || event.ctrlKey) && event.keyCode === 75) {
                event.preventDefault()
                event.stopPropagation()
                if (inputRef.current !== null && document.activeElement !== inputRef.current) {
                    inputRef.current.focus()
                }
            }
        }

        window.addEventListener('keydown', onShortcut)
        return () => {
            window.removeEventListener('keydown', onShortcut)
        }
    }, [props, router, updateKeywordQuery])

    return (
        <>
            <Head>
                {keyword && <title>{`${keyword} - Avatar Search - Unlight Management`}</title>}
            </Head>
            <div className="fixed rel w:max-content m:auto text-align:center pt:16">
                <input
                    ref={inputRef}
                    className={`my:6 bg:gray-30 b:1|solid|gray outline:none p:5|12 ~width|300ms w:258@<xs w:360@<sm w:580 ${expandInput ? 'w:full!' : ''}`}
                    onInput={onInput}
                    onFocus={() => { if (router.pathname !== '/avatar') router.push('/avatar') }}
                    onBlur={() => { if (!inputRef?.current?.value) { router.push('/') } }}
                    placeholder="Search..."
                    type="search" />

                <div className={`fixed ${loading ? 'opacity:1!' : ''} left:0 mt:36 w:full h:full flex flex:col align-items:center pointer-events:none ~opacity|300ms|ease opacity:0`}>
                    <Loading width={100} height={100} className="inline-block" />
                    <Image src="/unlight/images/data/title/loading.swf/1.svg" width={120} height={25} alt={''} className="inline-block" />
                </div>
                <h1 className={`fixed left:0 font-family:'BradleyGratis' text-align:center mt:64 w:full letter-spacing:1.25 ~opacity|300ms|ease opacity:0 ${result !== null && !result.length && keyword && !loading ? 'opacity:.25!' : ''} pointer-events:none`}>
                    Not Found
                </h1>
                <div className={`~opacity|300ms|ease ${loading ? 'opacity:.25' : ''} my:6`}>
                    <AvatarList avatars={result} />
                </div>
            </div>
        </>
    )
}