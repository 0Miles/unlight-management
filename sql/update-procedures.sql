DROP PROCEDURE IF EXISTS unlight_db.add_chara_cards_to_deck;
DROP PROCEDURE IF EXISTS unlight_db.add_all_chara_cards_to_deck;
DROP PROCEDURE IF EXISTS unlight_db.fix_library;
DROP PROCEDURE IF EXISTS unlight_db.add_items_to_avatar;
DROP PROCEDURE IF EXISTS unlight_db.add_all_items_to_avatar;
DROP PROCEDURE IF EXISTS unlight_db.repeat_add_all_items_to_avatar;
DROP PROCEDURE IF EXISTS unlight_db.add_avatar_parts_to_avatar;
DROP PROCEDURE IF EXISTS unlight_db.add_all_avatar_parts_to_avatar;
DROP PROCEDURE IF EXISTS unlight_db.add_event_cards_to_deck;
DROP PROCEDURE IF EXISTS unlight_db.add_all_event_cards_to_deck;
DROP PROCEDURE IF EXISTS unlight_db.repeat_add_all_event_cards_to_deck;
DROP PROCEDURE IF EXISTS unlight_db.add_weapon_cards_to_deck;
DROP PROCEDURE IF EXISTS unlight_db.add_all_weapon_cards_to_deck;
DROP PROCEDURE IF EXISTS unlight_db.repeat_add_all_weapon_cards_to_deck;
DROP PROCEDURE IF EXISTS unlight_db.super_avatar;

DELIMITER //
-- add all chara card
CREATE PROCEDURE unlight_db.add_chara_cards_to_deck(deckid int, cardid int, countn int)
BEGIN
    DECLARE i INT DEFAULT 0; 
    WHILE (i < countn) DO
        INSERT INTO unlight_db.card_inventories
                    (chara_card_deck_id, chara_card_id, `position`, before_deck_id, created_at, updated_at)
                VALUES(deckid, cardid, 0, 0, NOW(), NOW());
        SET i = i+1;
    END WHILE;
END;
//

CREATE PROCEDURE unlight_db.add_all_chara_cards_to_deck(deckid int)
BEGIN
    DECLARE i INT DEFAULT 1;
    DECLARE a INT DEFAULT (SELECT max(id) from unlight_db.chara_cards);
    WHILE (i <= a) DO
        IF( EXISTS(
            SELECT *
            FROM unlight_db.chara_cards
            WHERE id=i AND caption <> '')) then
            BEGIN
                INSERT INTO unlight_db.card_inventories
                    (chara_card_deck_id, chara_card_id, `position`, before_deck_id, created_at, updated_at)
                VALUES(deckid, i, 0, 0, NOW(), NOW());
            END;
        END if;
        SET i = i+1;
    END WHILE;
END;
//

-- fix library
CREATE PROCEDURE unlight_db.fix_library(deckid int)
BEGIN
   DELETE FROM unlight_db.card_inventories
    WHERE chara_card_deck_id = deckid AND chara_card_id in (
        SELECT id FROM chara_cards WHERE (id >=20118 AND id <=20122) or (id >=20124 AND id <=20128) or (id >=20130 AND id <=20134) or (id >=20136 AND id <=20140) or (id >=20142 AND id <=20146) or (id >=20148 AND id <=20152) or (id >=20154 AND id <=20158) or (id >=20160 AND id <=20164)
    );
END;
//

-- add all item
CREATE PROCEDURE unlight_db.add_items_to_avatar(avatarid int, itemid int, countn int)
BEGIN
    DECLARE i INT DEFAULT 0; 
    WHILE (i < countn) DO
        INSERT INTO unlight_db.item_inventories
        (avatar_id, avatar_item_id, state, server_type, use_at, created_at, updated_at)
        VALUES(avatarid, itemid, 0, 0, NULL, NOW(), NOW());
        SET i = i+1;
    END WHILE;
END;
//

CREATE PROCEDURE unlight_db.add_all_items_to_avatar(avatarid int)
BEGIN
    DECLARE i INT DEFAULT 1;
    DECLARE a INT DEFAULT (SELECT max(id) from unlight_db.avatar_items);
    WHILE (i <= a) DO
        IF( EXISTS(
                SELECT *
                FROM unlight_db.avatar_items
                WHERE id = i)) then
                BEGIN			
                INSERT INTO unlight_db.item_inventories
                    (avatar_id, avatar_item_id, state, server_type, use_at, created_at, updated_at)
                    VALUES(avatarid, i, 0, 0, NULL, NOW(), NOW());
                END;
        END if;
        SET i = i+1;
    END WHILE;
END;
//

CREATE PROCEDURE unlight_db.repeat_add_all_items_to_avatar(avatarid int, countn int)
BEGIN
    DECLARE c INT DEFAULT 1; 
    WHILE (c <= countn) DO
        CALL unlight_db.add_all_items_to_avatar(avatarid);
        SET c = c+1;
    END WHILE;
END;
//

-- add all avatar_parts
CREATE PROCEDURE unlight_db.add_avatar_parts_to_avatar(avatarid int, partid int)
BEGIN
    DECLARE i INT DEFAULT 0; 
    WHILE (i < countn) DO
        INSERT INTO unlight_db.part_inventories
                    (avatar_id, avatar_part_id, used, END_at, before_avatar_id, created_at, updated_at)
                    VALUES(avatarid, partid, 0, NULL, 0, NOW(), NOW());
        SET i = i+1;
    END WHILE;
END;
//

CREATE PROCEDURE unlight_db.add_all_avatar_parts_to_avatar(avatarid int)
BEGIN
    DECLARE i INT DEFAULT 1; 
    DECLARE a INT DEFAULT (SELECT max(id) from unlight_db.avatar_parts);
    WHILE (i <= a) DO
        IF( EXISTS(
             SELECT *
             FROM unlight_db.avatar_parts
             WHERE id = i)) then
             BEGIN
                INSERT INTO unlight_db.part_inventories
                    (avatar_id, avatar_part_id, used, END_at, before_avatar_id, created_at, updated_at)
                    VALUES(avatarid, i, 0, NULL, 0, NOW(), NOW());
             END;
        END if;
        SET i = i+1;
    END WHILE;
END;
//

-- add all event cards
CREATE PROCEDURE unlight_db.add_event_cards_to_deck(deckid int, cardid int, countn int)
BEGIN
    DECLARE i INT DEFAULT 0; 
    WHILE (i < countn) DO
        INSERT INTO unlight_db.chara_card_slot_inventories
            (chara_card_deck_id, deck_position, card_position, kind, card_id, weapon_type, before_deck_id, combine_param1, combine_param2, combine_param1_str, `level`, `exp`, combine_param3, created_at, updated_at)
            VALUES(deckid, 0, 0, 2, cardid, 0, NULL, 0, 536881152, '0', 1, 0, 0, NOW(), NOW());
        SET i = i+1;
    END WHILE;
END;
//

CREATE PROCEDURE unlight_db.add_all_event_cards_to_deck(deckid int)
BEGIN
    DECLARE i INT DEFAULT 1;
    DECLARE a INT DEFAULT 104;
    WHILE (i <= a) DO
        IF( EXISTS(
            SELECT *
            FROM unlight_db.event_cards
            WHERE id = i)) then
            BEGIN
                INSERT INTO unlight_db.chara_card_slot_inventories
                    (chara_card_deck_id, deck_position, card_position, kind, card_id, weapon_type, before_deck_id, combine_param1, combine_param2, combine_param1_str, `level`, `exp`, combine_param3, created_at, updated_at)
                    VALUES(deckid, 0, 0, 2, i, 0, NULL, 0, 536881152, '0', 1, 0, 0, NOW(), NOW());
            END;
        END if;
        SET i = i+1;
    END WHILE;
END;
//

CREATE PROCEDURE unlight_db.repeat_add_all_event_cards_to_deck(deckid int, countn int)
BEGIN
    DECLARE c INT DEFAULT 1; 
    WHILE (c <= countn) DO
        CALL unlight_db.add_all_event_cards_to_deck(deckid);
        SET c = c + 1;
    END WHILE;
END;
//

-- add all weapon cards
CREATE PROCEDURE unlight_db.add_weapon_cards_to_deck(deckid int, cardid int, countn int)
BEGIN
    DECLARE i INT DEFAULT 0; 
    WHILE (i < countn) DO
        INSERT INTO unlight_db.chara_card_slot_inventories
            (chara_card_deck_id, deck_position, card_position, kind, card_id, weapon_type, before_deck_id, combine_param1, combine_param2, combine_param1_str, `level`, `exp`, combine_param3, created_at, updated_at)
            VALUES(deckid, 0, 0, 0, cardid, 0, NULL, 0, 536881152, '0', 1, 0, 0, NOW(), NOW());
        SET i = i+1;
    END WHILE;
END;
//

CREATE PROCEDURE unlight_db.add_all_weapon_cards_to_deck(deckid int)
BEGIN
    DECLARE i INT DEFAULT 1; 
    DECLARE a INT DEFAULT (SELECT max(id) from unlight_db.weapon_cards);
    WHILE (i <= a) DO
        IF( EXISTS(
             SELECT *
             FROM unlight_db.weapon_cards
             WHERE id = i AND name <> '' AND caption <> '')) then
             BEGIN
                INSERT INTO unlight_db.chara_card_slot_inventories
                    (chara_card_deck_id, deck_position, card_position, kind, card_id, weapon_type, before_deck_id, combine_param1, combine_param2, combine_param1_str, `level`, `exp`, combine_param3, created_at, updated_at)
                    VALUES(deckid, 0, 0, 0, i, 0, NULL, 0, 536881152, '0', 1, 0, 0, NOW(), NOW());
             END;
        END if;
        SET i = i+1;
    END WHILE;
END;
//

CREATE PROCEDURE unlight_db.repeat_add_all_weapon_cards_to_deck(deckid int, countn int)
BEGIN
    DECLARE c INT DEFAULT 1; 
    WHILE (c <= countn) DO
        CALL unlight_db.add_all_weapon_cards_to_deck(deckid);
        SET c = c + 1;
    END WHILE;
END;
//

CREATE PROCEDURE unlight_db.super_avatar(avatarid INT)
BEGIN
    DECLARE deckid INT DEFAULT (SELECT id FROM unlight_db.chara_card_decks WHERE name='Binder' AND avatar_id=avatarid);
    UPDATE unlight_db.avatars
    SET gems=999999, level=128, energy=999, energy_max=999, friEND_max=999, part_inventory_max=9999
    WHERE id=avatarid;
    CALL unlight_db.add_all_chara_cards_to_deck(deckid);
    CALL unlight_db.fix_library(deckid);
    CALL unlight_db.repeat_add_all_items_to_avatar(avatarid, 99);
    CALL unlight_db.add_all_avatar_parts_to_avatar(avatarid);
    CALL unlight_db.repeat_add_all_event_cards_to_deck(deckid, 18);
    CALL unlight_db.repeat_add_all_weapon_cards_to_deck(deckid, 9);
END;
//