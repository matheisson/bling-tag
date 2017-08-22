--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.8
-- Dumped by pg_dump version 9.5.8

-- Started on 2017-08-22 09:49:19 CEST

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
-- TOC entry 200 (class 1259 OID 344806)
-- Name: App_Stock_commodity; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE "App_Stock_commodity" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    price double precision NOT NULL,
    picture_url character varying(1000) NOT NULL
);


ALTER TABLE "App_Stock_commodity" OWNER TO postgres;

--
-- TOC entry 199 (class 1259 OID 344804)
-- Name: App_Stock_commodity_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE "App_Stock_commodity_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "App_Stock_commodity_id_seq" OWNER TO postgres;

--
-- TOC entry 2216 (class 0 OID 0)
-- Dependencies: 199
-- Name: App_Stock_commodity_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE "App_Stock_commodity_id_seq" OWNED BY "App_Stock_commodity".id;


--
-- TOC entry 2093 (class 2604 OID 344809)
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "App_Stock_commodity" ALTER COLUMN id SET DEFAULT nextval('"App_Stock_commodity_id_seq"'::regclass);


--
-- TOC entry 2211 (class 0 OID 344806)
-- Dependencies: 200
-- Data for Name: App_Stock_commodity; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "App_Stock_commodity" VALUES (1, 'Coke', 120, 'http://drugabuse.com/wp-content/uploads/drugabuse-shutterstock220086538-cocaine_feature_image-cocaine.jpg');
INSERT INTO "App_Stock_commodity" VALUES (2, 'Beer', 5, 'http://www.menshealth.com/sites/menshealth.com/files/beer-main_0.jpg/static/pics/beer.jpg');
INSERT INTO "App_Stock_commodity" VALUES (3, 'weed', 10, 'http://canadianhempco.com/images/green-dragon-marijuana%20seeds.jpg/static/pics/weed.jpg');
INSERT INTO "App_Stock_commodity" VALUES (4, 'brige a hungarian policeman', 40, 'http://www.onpointpreparedness.net/wp-content/uploads/2015/03/Police-Bribe-Credit-Potoscom-630x418.jpg');
INSERT INTO "App_Stock_commodity" VALUES (5, 'buy a roman slave', 4400, 'http://static.snopes.com/app/uploads/2016/08/slave-auction.jpg');
INSERT INTO "App_Stock_commodity" VALUES (6, '1g of gold ', 41.5, 'http://s.marketwatch.com/public/resources/MWimages/MW-EZ870_gold_b_ZG_20161109130257.jpg');
INSERT INTO "App_Stock_commodity" VALUES (7, '1g of silver', 17.3999999999999986, 'https://static1.seekingalpha.com/images/marketing_images/mining_minerals/silver_3.jpeg');
INSERT INTO "App_Stock_commodity" VALUES (8, 'amsterdam windowgirl', 65, 'https://bw-1651cf0d2f737d7adeab84d339dbabd3-gallery.s3.amazonaws.com/images/image_2184705/fe88cdd2d8c22c00b52d58769f929323_large.jpg');
INSERT INTO "App_Stock_commodity" VALUES (9, 'Champagne', 10, 'asdasdasdas');
INSERT INTO "App_Stock_commodity" VALUES (11, 'Office Space in London (serviced)', 1715, 'londoffice');
INSERT INTO "App_Stock_commodity" VALUES (10, 'Office space in Tokyo', 1209, 'office');


--
-- TOC entry 2217 (class 0 OID 0)
-- Dependencies: 199
-- Name: App_Stock_commodity_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"App_Stock_commodity_id_seq"', 10, true);


--
-- TOC entry 2095 (class 2606 OID 344814)
-- Name: App_Stock_commodity_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "App_Stock_commodity"
    ADD CONSTRAINT "App_Stock_commodity_pkey" PRIMARY KEY (id);


-- Completed on 2017-08-22 09:49:19 CEST

--
-- PostgreSQL database dump complete
--

