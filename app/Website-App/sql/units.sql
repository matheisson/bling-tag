--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.8
-- Dumped by pg_dump version 9.5.8

-- Started on 2017-08-22 09:50:12 CEST

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 209 (class 1259 OID 361398)
-- Name: App_Stock_units; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "App_Stock_units" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    list_of_units text NOT NULL
);


--
-- TOC entry 208 (class 1259 OID 361396)
-- Name: App_Stock_units_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "App_Stock_units_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2216 (class 0 OID 0)
-- Dependencies: 208
-- Name: App_Stock_units_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "App_Stock_units_id_seq" OWNED BY "App_Stock_units".id;


--
-- TOC entry 2093 (class 2604 OID 361401)
-- Name: id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "App_Stock_units" ALTER COLUMN id SET DEFAULT nextval('"App_Stock_units_id_seq"'::regclass);


--
-- TOC entry 2211 (class 0 OID 361398)
-- Dependencies: 209
-- Data for Name: App_Stock_units; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO "App_Stock_units" VALUES (9, 'ChampagneBottles', '[{"name": "1/4", "multiplier": 0.25}, {"name": "1/2", "multiplier":0.5},{"name": "Bottle", "multiplier": 1}, {"name": "Magnum", "multiplier": 2},{"name": "Jeroboam", "multiplier": 4}, {"name": "Rehoboam", "multiplier": 6},{"name": "Methusela", "multiplier": 8}, {"name": "Salmanazar", "multiplier": 12}, {"name": "Balthazar", "multiplier": 16}, {"name": "Nebuchadnezzar", "multiplier": 20},{"name": "Solomon", "multiplier": 24}, {"name": "Sovereign", "multiplier": 35}, {"name": "Primat", "multiplier": 36}, {"name": "Melchizedek", "multiplier": 40}]');
INSERT INTO "App_Stock_units" VALUES (1, 'TroyWeight', '[{"name": "Troy Pound", "multiplier": 5760},{"name": "Troy Ounce", "multiplier":480},{"name": "Troy Grain", "multiplier": 1}]');
INSERT INTO "App_Stock_units" VALUES (2, 'MetricWeight', '[{"name": "Kilogram", "multiplier": 1000},{"name": "Dekagram", "multiplier":100},{"name": "Gram", "multiplier": 1}]');
INSERT INTO "App_Stock_units" VALUES (3, 'Area', '[{"name": "Square Meter", "multiplier":1},{"name": "Tsubo", "multiplier":3.305785123},{"name": "Tatami", "multiplier":1.6529},{"name": "Square Feet", "multiplier":0.092903}]');


--
-- TOC entry 2217 (class 0 OID 0)
-- Dependencies: 208
-- Name: App_Stock_units_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"App_Stock_units_id_seq"', 11, true);


--
-- TOC entry 2095 (class 2606 OID 361406)
-- Name: App_Stock_units_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "App_Stock_units"
    ADD CONSTRAINT "App_Stock_units_pkey" PRIMARY KEY (id);


-- Completed on 2017-08-22 09:50:13 CEST

--
-- PostgreSQL database dump complete
--

