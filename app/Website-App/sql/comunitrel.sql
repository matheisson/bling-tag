PGDMP     6    2    	            u        	   bling_tag    9.5.8    9.5.8     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false            �            1259    361390    App_Stock_commodityunitrelation    TABLE     �   CREATE TABLE "App_Stock_commodityunitrelation" (
    id integer NOT NULL,
    commodity_id integer NOT NULL,
    unit_id integer NOT NULL
);
 5   DROP TABLE public."App_Stock_commodityunitrelation";
       public         postgres    false            �            1259    361388 &   App_Stock_commodityunitrelation_id_seq    SEQUENCE     �   CREATE SEQUENCE "App_Stock_commodityunitrelation_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ?   DROP SEQUENCE public."App_Stock_commodityunitrelation_id_seq";
       public       postgres    false    207            �           0    0 &   App_Stock_commodityunitrelation_id_seq    SEQUENCE OWNED BY     g   ALTER SEQUENCE "App_Stock_commodityunitrelation_id_seq" OWNED BY "App_Stock_commodityunitrelation".id;
            public       postgres    false    206            -           2604    361393    id    DEFAULT     �   ALTER TABLE ONLY "App_Stock_commodityunitrelation" ALTER COLUMN id SET DEFAULT nextval('"App_Stock_commodityunitrelation_id_seq"'::regclass);
 S   ALTER TABLE public."App_Stock_commodityunitrelation" ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    206    207    207            �          0    361390    App_Stock_commodityunitrelation 
   TABLE DATA                     public       postgres    false    207          �           0    0 &   App_Stock_commodityunitrelation_id_seq    SEQUENCE SET     O   SELECT pg_catalog.setval('"App_Stock_commodityunitrelation_id_seq"', 2, true);
            public       postgres    false    206            0           2606    361395 $   App_Stock_commodityunitrelation_pkey 
   CONSTRAINT        ALTER TABLE ONLY "App_Stock_commodityunitrelation"
    ADD CONSTRAINT "App_Stock_commodityunitrelation_pkey" PRIMARY KEY (id);
 r   ALTER TABLE ONLY public."App_Stock_commodityunitrelation" DROP CONSTRAINT "App_Stock_commodityunitrelation_pkey";
       public         postgres    false    207    207            .           1259    361412 5   App_Stock_commodityunitrelation_commodity_id_bec023b5    INDEX     �   CREATE INDEX "App_Stock_commodityunitrelation_commodity_id_bec023b5" ON "App_Stock_commodityunitrelation" USING btree (commodity_id);
 K   DROP INDEX public."App_Stock_commodityunitrelation_commodity_id_bec023b5";
       public         postgres    false    207            1           1259    361413 0   App_Stock_commodityunitrelation_unit_id_f95a5fa2    INDEX     |   CREATE INDEX "App_Stock_commodityunitrelation_unit_id_f95a5fa2" ON "App_Stock_commodityunitrelation" USING btree (unit_id);
 F   DROP INDEX public."App_Stock_commodityunitrelation_unit_id_f95a5fa2";
       public         postgres    false    207            2           2606    361407 7   App_Stock_commodityu_commodity_id_bec023b5_fk_App_Stock    FK CONSTRAINT     �   ALTER TABLE ONLY "App_Stock_commodityunitrelation"
    ADD CONSTRAINT "App_Stock_commodityu_commodity_id_bec023b5_fk_App_Stock" FOREIGN KEY (commodity_id) REFERENCES "App_Stock_commodity"(id) DEFERRABLE INITIALLY DEFERRED;
 �   ALTER TABLE ONLY public."App_Stock_commodityunitrelation" DROP CONSTRAINT "App_Stock_commodityu_commodity_id_bec023b5_fk_App_Stock";
       public       postgres    false    207            3           2606    361414 2   App_Stock_commodityu_unit_id_f95a5fa2_fk_App_Stock    FK CONSTRAINT     �   ALTER TABLE ONLY "App_Stock_commodityunitrelation"
    ADD CONSTRAINT "App_Stock_commodityu_unit_id_f95a5fa2_fk_App_Stock" FOREIGN KEY (unit_id) REFERENCES "App_Stock_units"(id) DEFERRABLE INITIALLY DEFERRED;
 �   ALTER TABLE ONLY public."App_Stock_commodityunitrelation" DROP CONSTRAINT "App_Stock_commodityu_unit_id_f95a5fa2_fk_App_Stock";
       public       postgres    false    207            �   �   x���v
Q���WPr,(�.�OΎO����O�,�,��,)J�I,���SR��L�Q��Ńx @��B��O�k������%iZsyR�l#3C��m6ۈ&f��(���ݦ`�i�nP`�(��pP�B�� ��Ң     