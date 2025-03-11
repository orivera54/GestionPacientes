--
-- PostgreSQL database dump
--

-- Dumped from database version 17.3
-- Dumped by pg_dump version 17.3

-- Started on 2025-03-11 14:26:01

-- Crear la base de datos gestordb
CREATE DATABASE gestordb;
\c gestordb

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 4 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: pg_database_owner
--

CREATE SCHEMA public;

ALTER SCHEMA public OWNER TO pg_database_owner;

--
-- TOC entry 4910 (class 0 OID 0)
-- Dependencies: 4
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: pg_database_owner
--

COMMENT ON SCHEMA public IS 'standard public schema';

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 220 (class 1259 OID 24619)
-- Name: followups; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.followups (
    id integer NOT NULL,
    patientid integer NOT NULL,
    note text NOT NULL,
    date timestamp with time zone DEFAULT now() NOT NULL
);

ALTER TABLE public.followups OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 24618)
-- Name: followups_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.followups_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER SEQUENCE public.followups_id_seq OWNER TO postgres;

--
-- TOC entry 4912 (class 0 OID 0)
-- Dependencies: 219
-- Name: followups_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.followups_id_seq OWNED BY public.followups.id;

--
-- TOC entry 218 (class 1259 OID 24610)
-- Name: patients; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.patients (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    contactnumber character varying(50) NOT NULL,
    disease character varying(255) NOT NULL
);

ALTER TABLE public.patients OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 24609)
-- Name: patients_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.patients_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER SEQUENCE public.patients_id_seq OWNER TO postgres;

--
-- TOC entry 4914 (class 0 OID 0)
-- Dependencies: 217
-- Name: patients_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.patients_id_seq OWNED BY public.patients.id;

--
-- TOC entry 4748 (class 2604 OID 24622)
-- Name: followups id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.followups ALTER COLUMN id SET DEFAULT nextval('public.followups_id_seq'::regclass);

--
-- TOC entry 4747 (class 2604 OID 24613)
-- Name: patients id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.patients ALTER COLUMN id SET DEFAULT nextval('public.patients_id_seq'::regclass);

--
-- TOC entry 4904 (class 0 OID 24619)
-- Dependencies: 220
-- Data for Name: followups; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.followups (id, patientid, note, date) FROM stdin;
1   2   Presenta fiebre alta    2025-03-07 00:00:00-05
2   2   se revializa tag de pulmones    2025-03-10 22:28:45.089-05
3   2   se ordena examen por tos con silbido    2025-03-11 09:56:31.82-05
5   4   se solicita biopsia 2025-03-11 23:33:00-05
6   5   se solicita radiografia de la pierna    2025-03-11 23:41:00-05
7   5   se realiza el paso a urgencias  2025-03-11 07:49:00-05
8   5   Se realiza chequeo medico   2025-03-11 09:56:00-05
\.

--
-- TOC entry 4902 (class 0 OID 24610)
-- Dependencies: 218
-- Data for Name: patients; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.patients (id, name, email, contactnumber, disease) FROM stdin;
2   Oscar Lozano    oscar.lozano@gmail.com  315987456   Gripe
3   Carlos Romero   cromero@correo.com  3158796548  Epilepsia
4   Andrea Quijano  andrea.quijano@eltrabajo.com    3215674523  Arteritis Temporal Juvenil
5   Jose Garzón jgarzon67@gmail.com 3102569874  Inflamación Rodilla
\.

--
-- TOC entry 4915 (class 0 OID 0)
-- Dependencies: 219
-- Name: followups_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.followups_id_seq', 8, true);

--
-- TOC entry 4916 (class 0 OID 0)
-- Dependencies: 217
-- Name: patients_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.patients_id_seq', 5, true);

--
-- TOC entry 4753 (class 2606 OID 24627)
-- Name: followups followups_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.followups
    ADD CONSTRAINT followups_pkey PRIMARY KEY (id);

--
-- TOC entry 4751 (class 2606 OID 24617)
-- Name: patients patients_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.patients
    ADD CONSTRAINT patients_pkey PRIMARY KEY (id);

--
-- TOC entry 4754 (class 1259 OID 24633)
-- Name: idx_followups_patientid; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_followups_patientid ON public.followups USING btree (patientid);

--
-- TOC entry 4755 (class 2606 OID 24628)
-- Name: followups fk_followups_patients; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.followups
    ADD CONSTRAINT fk_followups_patients FOREIGN KEY (patientid) REFERENCES public.patients(id) ON DELETE CASCADE;

--
-- TOC entry 4911 (class 0 OID 0)
-- Dependencies: 220
-- Name: TABLE followups; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.followups TO supacientes;

--
-- TOC entry 4913 (class 0 OID 0)
-- Dependencies: 218
-- Name: TABLE patients; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON TABLE public.patients TO supacientes;

-- Completed on 2025-03-11 14:26:02

--
-- PostgreSQL database dump complete
--
