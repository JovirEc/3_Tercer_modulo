PGDMP  !                    |         
   inventario    16.2    16.2 P    Q           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            R           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            S           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            T           1262    16812 
   inventario    DATABASE     }   CREATE DATABASE inventario WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Spain.1252';
    DROP DATABASE inventario;
                postgres    false            �            1259    17159    cabecera_pedido    TABLE     �   CREATE TABLE public.cabecera_pedido (
    codigo_cp integer NOT NULL,
    proveedor character varying(13) NOT NULL,
    fecha date NOT NULL,
    estado character(1) NOT NULL
);
 #   DROP TABLE public.cabecera_pedido;
       public         heap    postgres    false            �            1259    17158    cabecera_pedido_numero_seq    SEQUENCE     �   CREATE SEQUENCE public.cabecera_pedido_numero_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public.cabecera_pedido_numero_seq;
       public          postgres    false    231            U           0    0    cabecera_pedido_numero_seq    SEQUENCE OWNED BY     \   ALTER SEQUENCE public.cabecera_pedido_numero_seq OWNED BY public.cabecera_pedido.codigo_cp;
          public          postgres    false    230            �            1259    17115    cabecera_venta    TABLE     �   CREATE TABLE public.cabecera_venta (
    codigo_cv integer NOT NULL,
    fecha timestamp without time zone NOT NULL,
    total_sin_iva money NOT NULL,
    iva money NOT NULL,
    total money NOT NULL
);
 "   DROP TABLE public.cabecera_venta;
       public         heap    postgres    false            �            1259    17114    cabecera_venta_codigo_cv_seq    SEQUENCE     �   CREATE SEQUENCE public.cabecera_venta_codigo_cv_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 3   DROP SEQUENCE public.cabecera_venta_codigo_cv_seq;
       public          postgres    false    224            V           0    0    cabecera_venta_codigo_cv_seq    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public.cabecera_venta_codigo_cv_seq OWNED BY public.cabecera_venta.codigo_cv;
          public          postgres    false    223            �            1259    17059 
   categorias    TABLE     �   CREATE TABLE public.categorias (
    codigo_cat integer NOT NULL,
    nombre character varying(100) NOT NULL,
    categoria_padre integer
);
    DROP TABLE public.categorias;
       public         heap    postgres    false            �            1259    17058    categorias_codigo_cat_seq    SEQUENCE     �   CREATE SEQUENCE public.categorias_codigo_cat_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.categorias_codigo_cat_seq;
       public          postgres    false    216            W           0    0    categorias_codigo_cat_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.categorias_codigo_cat_seq OWNED BY public.categorias.codigo_cat;
          public          postgres    false    215            �            1259    17070    categorias_unidad_medida    TABLE     �   CREATE TABLE public.categorias_unidad_medida (
    codigo_cdm character(1) NOT NULL,
    nombre character varying(100) NOT NULL
);
 ,   DROP TABLE public.categorias_unidad_medida;
       public         heap    postgres    false            �            1259    17176    detalle_pedido    TABLE       CREATE TABLE public.detalle_pedido (
    codigo_dp integer NOT NULL,
    cabecera_pedido_codigo integer NOT NULL,
    producto integer NOT NULL,
    cantidad_solicitada integer NOT NULL,
    subtotal money NOT NULL,
    cantidad_recibida integer NOT NULL
);
 "   DROP TABLE public.detalle_pedido;
       public         heap    postgres    false            �            1259    17175    detalle_pedido_codigo_dp_seq    SEQUENCE     �   CREATE SEQUENCE public.detalle_pedido_codigo_dp_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 3   DROP SEQUENCE public.detalle_pedido_codigo_dp_seq;
       public          postgres    false    233            X           0    0    detalle_pedido_codigo_dp_seq    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public.detalle_pedido_codigo_dp_seq OWNED BY public.detalle_pedido.codigo_dp;
          public          postgres    false    232            �            1259    17122    detalle_ventas    TABLE     
  CREATE TABLE public.detalle_ventas (
    codigo_dv integer NOT NULL,
    cabecera_ventas integer NOT NULL,
    producto integer NOT NULL,
    cantidad integer NOT NULL,
    precio_venta money NOT NULL,
    subtotal money NOT NULL,
    subtotal_iva money NOT NULL
);
 "   DROP TABLE public.detalle_ventas;
       public         heap    postgres    false            �            1259    17121    detalle_ventas_codigo_dv_seq    SEQUENCE     �   CREATE SEQUENCE public.detalle_ventas_codigo_dv_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 3   DROP SEQUENCE public.detalle_ventas_codigo_dv_seq;
       public          postgres    false    226            Y           0    0    detalle_ventas_codigo_dv_seq    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public.detalle_ventas_codigo_dv_seq OWNED BY public.detalle_ventas.codigo_dv;
          public          postgres    false    225            �            1259    17143    estados_pedido    TABLE     }   CREATE TABLE public.estados_pedido (
    codigo_ep character(1) NOT NULL,
    descripcion character varying(100) NOT NULL
);
 "   DROP TABLE public.estados_pedido;
       public         heap    postgres    false            �            1259    17103    historial_stock    TABLE     �   CREATE TABLE public.historial_stock (
    codigo_historial integer NOT NULL,
    fecha timestamp without time zone NOT NULL,
    referencia character varying(100) NOT NULL,
    producto integer NOT NULL,
    cantidad integer NOT NULL
);
 #   DROP TABLE public.historial_stock;
       public         heap    postgres    false            �            1259    17102 $   historial_stock_codigo_historial_seq    SEQUENCE     �   CREATE SEQUENCE public.historial_stock_codigo_historial_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ;   DROP SEQUENCE public.historial_stock_codigo_historial_seq;
       public          postgres    false    222            Z           0    0 $   historial_stock_codigo_historial_seq    SEQUENCE OWNED BY     m   ALTER SEQUENCE public.historial_stock_codigo_historial_seq OWNED BY public.historial_stock.codigo_historial;
          public          postgres    false    221            �            1259    17086 	   productos    TABLE     .  CREATE TABLE public.productos (
    codigo_prod integer NOT NULL,
    nombre character varying(100) NOT NULL,
    udm character varying(2) NOT NULL,
    precio_venta money NOT NULL,
    tiene_iva boolean NOT NULL,
    coste money NOT NULL,
    categoria integer NOT NULL,
    stock integer NOT NULL
);
    DROP TABLE public.productos;
       public         heap    postgres    false            �            1259    17085    productos_codigo_prod_seq    SEQUENCE     �   CREATE SEQUENCE public.productos_codigo_prod_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.productos_codigo_prod_seq;
       public          postgres    false    220            [           0    0    productos_codigo_prod_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.productos_codigo_prod_seq OWNED BY public.productos.codigo_prod;
          public          postgres    false    219            �            1259    17148    proveedores    TABLE     ,  CREATE TABLE public.proveedores (
    identificador character varying(13) NOT NULL,
    tipo_documento character(1) NOT NULL,
    nombre character varying(100) NOT NULL,
    telefono character(10) NOT NULL,
    correo character varying(100) NOT NULL,
    direccion character varying(100) NOT NULL
);
    DROP TABLE public.proveedores;
       public         heap    postgres    false            �            1259    17138    tipo_documento    TABLE     }   CREATE TABLE public.tipo_documento (
    codigo_td character(1) NOT NULL,
    descripcion character varying(100) NOT NULL
);
 "   DROP TABLE public.tipo_documento;
       public         heap    postgres    false            �            1259    17075    unidades_medida    TABLE     �   CREATE TABLE public.unidades_medida (
    codigo_udm character varying(2) NOT NULL,
    descripcion character varying(100) NOT NULL,
    categoria_udm character(1) NOT NULL
);
 #   DROP TABLE public.unidades_medida;
       public         heap    postgres    false            �           2604    17162    cabecera_pedido codigo_cp    DEFAULT     �   ALTER TABLE ONLY public.cabecera_pedido ALTER COLUMN codigo_cp SET DEFAULT nextval('public.cabecera_pedido_numero_seq'::regclass);
 H   ALTER TABLE public.cabecera_pedido ALTER COLUMN codigo_cp DROP DEFAULT;
       public          postgres    false    230    231    231            �           2604    17118    cabecera_venta codigo_cv    DEFAULT     �   ALTER TABLE ONLY public.cabecera_venta ALTER COLUMN codigo_cv SET DEFAULT nextval('public.cabecera_venta_codigo_cv_seq'::regclass);
 G   ALTER TABLE public.cabecera_venta ALTER COLUMN codigo_cv DROP DEFAULT;
       public          postgres    false    223    224    224            �           2604    17062    categorias codigo_cat    DEFAULT     ~   ALTER TABLE ONLY public.categorias ALTER COLUMN codigo_cat SET DEFAULT nextval('public.categorias_codigo_cat_seq'::regclass);
 D   ALTER TABLE public.categorias ALTER COLUMN codigo_cat DROP DEFAULT;
       public          postgres    false    216    215    216            �           2604    17179    detalle_pedido codigo_dp    DEFAULT     �   ALTER TABLE ONLY public.detalle_pedido ALTER COLUMN codigo_dp SET DEFAULT nextval('public.detalle_pedido_codigo_dp_seq'::regclass);
 G   ALTER TABLE public.detalle_pedido ALTER COLUMN codigo_dp DROP DEFAULT;
       public          postgres    false    232    233    233            �           2604    17125    detalle_ventas codigo_dv    DEFAULT     �   ALTER TABLE ONLY public.detalle_ventas ALTER COLUMN codigo_dv SET DEFAULT nextval('public.detalle_ventas_codigo_dv_seq'::regclass);
 G   ALTER TABLE public.detalle_ventas ALTER COLUMN codigo_dv DROP DEFAULT;
       public          postgres    false    226    225    226            �           2604    17106     historial_stock codigo_historial    DEFAULT     �   ALTER TABLE ONLY public.historial_stock ALTER COLUMN codigo_historial SET DEFAULT nextval('public.historial_stock_codigo_historial_seq'::regclass);
 O   ALTER TABLE public.historial_stock ALTER COLUMN codigo_historial DROP DEFAULT;
       public          postgres    false    221    222    222            �           2604    17089    productos codigo_prod    DEFAULT     ~   ALTER TABLE ONLY public.productos ALTER COLUMN codigo_prod SET DEFAULT nextval('public.productos_codigo_prod_seq'::regclass);
 D   ALTER TABLE public.productos ALTER COLUMN codigo_prod DROP DEFAULT;
       public          postgres    false    219    220    220            L          0    17159    cabecera_pedido 
   TABLE DATA           N   COPY public.cabecera_pedido (codigo_cp, proveedor, fecha, estado) FROM stdin;
    public          postgres    false    231   f       E          0    17115    cabecera_venta 
   TABLE DATA           U   COPY public.cabecera_venta (codigo_cv, fecha, total_sin_iva, iva, total) FROM stdin;
    public          postgres    false    224   if       =          0    17059 
   categorias 
   TABLE DATA           I   COPY public.categorias (codigo_cat, nombre, categoria_padre) FROM stdin;
    public          postgres    false    216   �f       >          0    17070    categorias_unidad_medida 
   TABLE DATA           F   COPY public.categorias_unidad_medida (codigo_cdm, nombre) FROM stdin;
    public          postgres    false    217   vg       N          0    17176    detalle_pedido 
   TABLE DATA           �   COPY public.detalle_pedido (codigo_dp, cabecera_pedido_codigo, producto, cantidad_solicitada, subtotal, cantidad_recibida) FROM stdin;
    public          postgres    false    233   �g       G          0    17122    detalle_ventas 
   TABLE DATA           ~   COPY public.detalle_ventas (codigo_dv, cabecera_ventas, producto, cantidad, precio_venta, subtotal, subtotal_iva) FROM stdin;
    public          postgres    false    226   &h       I          0    17143    estados_pedido 
   TABLE DATA           @   COPY public.estados_pedido (codigo_ep, descripcion) FROM stdin;
    public          postgres    false    228   �h       C          0    17103    historial_stock 
   TABLE DATA           b   COPY public.historial_stock (codigo_historial, fecha, referencia, producto, cantidad) FROM stdin;
    public          postgres    false    222   �h       A          0    17086 	   productos 
   TABLE DATA           o   COPY public.productos (codigo_prod, nombre, udm, precio_venta, tiene_iva, coste, categoria, stock) FROM stdin;
    public          postgres    false    220   }i       J          0    17148    proveedores 
   TABLE DATA           i   COPY public.proveedores (identificador, tipo_documento, nombre, telefono, correo, direccion) FROM stdin;
    public          postgres    false    229   4j       H          0    17138    tipo_documento 
   TABLE DATA           @   COPY public.tipo_documento (codigo_td, descripcion) FROM stdin;
    public          postgres    false    227   �j       ?          0    17075    unidades_medida 
   TABLE DATA           Q   COPY public.unidades_medida (codigo_udm, descripcion, categoria_udm) FROM stdin;
    public          postgres    false    218   k       \           0    0    cabecera_pedido_numero_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.cabecera_pedido_numero_seq', 7, true);
          public          postgres    false    230            ]           0    0    cabecera_venta_codigo_cv_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public.cabecera_venta_codigo_cv_seq', 4, true);
          public          postgres    false    223            ^           0    0    categorias_codigo_cat_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.categorias_codigo_cat_seq', 12, true);
          public          postgres    false    215            _           0    0    detalle_pedido_codigo_dp_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public.detalle_pedido_codigo_dp_seq', 7, true);
          public          postgres    false    232            `           0    0    detalle_ventas_codigo_dv_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public.detalle_ventas_codigo_dv_seq', 5, true);
          public          postgres    false    225            a           0    0 $   historial_stock_codigo_historial_seq    SEQUENCE SET     S   SELECT pg_catalog.setval('public.historial_stock_codigo_historial_seq', 12, true);
          public          postgres    false    221            b           0    0    productos_codigo_prod_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.productos_codigo_prod_seq', 6, true);
          public          postgres    false    219            �           2606    17164 "   cabecera_pedido cabecera_pedido_pk 
   CONSTRAINT     g   ALTER TABLE ONLY public.cabecera_pedido
    ADD CONSTRAINT cabecera_pedido_pk PRIMARY KEY (codigo_cp);
 L   ALTER TABLE ONLY public.cabecera_pedido DROP CONSTRAINT cabecera_pedido_pk;
       public            postgres    false    231            �           2606    17120     cabecera_venta cabecera_venta_pk 
   CONSTRAINT     e   ALTER TABLE ONLY public.cabecera_venta
    ADD CONSTRAINT cabecera_venta_pk PRIMARY KEY (codigo_cv);
 J   ALTER TABLE ONLY public.cabecera_venta DROP CONSTRAINT cabecera_venta_pk;
       public            postgres    false    224            �           2606    17074 3   categorias_unidad_medida categoria_unidad_medida_pk 
   CONSTRAINT     y   ALTER TABLE ONLY public.categorias_unidad_medida
    ADD CONSTRAINT categoria_unidad_medida_pk PRIMARY KEY (codigo_cdm);
 ]   ALTER TABLE ONLY public.categorias_unidad_medida DROP CONSTRAINT categoria_unidad_medida_pk;
       public            postgres    false    217            �           2606    17064    categorias categorias_pk 
   CONSTRAINT     ^   ALTER TABLE ONLY public.categorias
    ADD CONSTRAINT categorias_pk PRIMARY KEY (codigo_cat);
 B   ALTER TABLE ONLY public.categorias DROP CONSTRAINT categorias_pk;
       public            postgres    false    216            �           2606    17181     detalle_pedido detalle_pedido_pk 
   CONSTRAINT     e   ALTER TABLE ONLY public.detalle_pedido
    ADD CONSTRAINT detalle_pedido_pk PRIMARY KEY (codigo_dp);
 J   ALTER TABLE ONLY public.detalle_pedido DROP CONSTRAINT detalle_pedido_pk;
       public            postgres    false    233            �           2606    17127     detalle_ventas detalle_ventas_pk 
   CONSTRAINT     e   ALTER TABLE ONLY public.detalle_ventas
    ADD CONSTRAINT detalle_ventas_pk PRIMARY KEY (codigo_dv);
 J   ALTER TABLE ONLY public.detalle_ventas DROP CONSTRAINT detalle_ventas_pk;
       public            postgres    false    226            �           2606    17147     estados_pedido estados_pedido_pk 
   CONSTRAINT     e   ALTER TABLE ONLY public.estados_pedido
    ADD CONSTRAINT estados_pedido_pk PRIMARY KEY (codigo_ep);
 J   ALTER TABLE ONLY public.estados_pedido DROP CONSTRAINT estados_pedido_pk;
       public            postgres    false    228            �           2606    17108 "   historial_stock historial_stock_pk 
   CONSTRAINT     n   ALTER TABLE ONLY public.historial_stock
    ADD CONSTRAINT historial_stock_pk PRIMARY KEY (codigo_historial);
 L   ALTER TABLE ONLY public.historial_stock DROP CONSTRAINT historial_stock_pk;
       public            postgres    false    222            �           2606    17091    productos productos_pk 
   CONSTRAINT     ]   ALTER TABLE ONLY public.productos
    ADD CONSTRAINT productos_pk PRIMARY KEY (codigo_prod);
 @   ALTER TABLE ONLY public.productos DROP CONSTRAINT productos_pk;
       public            postgres    false    220            �           2606    17152    proveedores proveedores_pk 
   CONSTRAINT     c   ALTER TABLE ONLY public.proveedores
    ADD CONSTRAINT proveedores_pk PRIMARY KEY (identificador);
 D   ALTER TABLE ONLY public.proveedores DROP CONSTRAINT proveedores_pk;
       public            postgres    false    229            �           2606    17142     tipo_documento tipo_documento_pk 
   CONSTRAINT     e   ALTER TABLE ONLY public.tipo_documento
    ADD CONSTRAINT tipo_documento_pk PRIMARY KEY (codigo_td);
 J   ALTER TABLE ONLY public.tipo_documento DROP CONSTRAINT tipo_documento_pk;
       public            postgres    false    227            �           2606    17079 "   unidades_medida unidades_medida_pk 
   CONSTRAINT     h   ALTER TABLE ONLY public.unidades_medida
    ADD CONSTRAINT unidades_medida_pk PRIMARY KEY (codigo_udm);
 L   ALTER TABLE ONLY public.unidades_medida DROP CONSTRAINT unidades_medida_pk;
       public            postgres    false    218            �           2606    17170 1   cabecera_pedido cabecera_pedido_estados_pedido_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.cabecera_pedido
    ADD CONSTRAINT cabecera_pedido_estados_pedido_fk FOREIGN KEY (estado) REFERENCES public.estados_pedido(codigo_ep);
 [   ALTER TABLE ONLY public.cabecera_pedido DROP CONSTRAINT cabecera_pedido_estados_pedido_fk;
       public          postgres    false    231    228    4762            �           2606    17165 .   cabecera_pedido cabecera_pedido_proveedores_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.cabecera_pedido
    ADD CONSTRAINT cabecera_pedido_proveedores_fk FOREIGN KEY (proveedor) REFERENCES public.proveedores(identificador);
 X   ALTER TABLE ONLY public.cabecera_pedido DROP CONSTRAINT cabecera_pedido_proveedores_fk;
       public          postgres    false    231    229    4764            �           2606    17065    categorias categorias_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.categorias
    ADD CONSTRAINT categorias_fk FOREIGN KEY (categoria_padre) REFERENCES public.categorias(codigo_cat);
 B   ALTER TABLE ONLY public.categorias DROP CONSTRAINT categorias_fk;
       public          postgres    false    216    216    4746            �           2606    17182 0   detalle_pedido detalle_pedido_cabecera_pedido_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.detalle_pedido
    ADD CONSTRAINT detalle_pedido_cabecera_pedido_fk FOREIGN KEY (cabecera_pedido_codigo) REFERENCES public.cabecera_pedido(codigo_cp);
 Z   ALTER TABLE ONLY public.detalle_pedido DROP CONSTRAINT detalle_pedido_cabecera_pedido_fk;
       public          postgres    false    4766    231    233            �           2606    17187 *   detalle_pedido detalle_pedido_productos_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.detalle_pedido
    ADD CONSTRAINT detalle_pedido_productos_fk FOREIGN KEY (producto) REFERENCES public.productos(codigo_prod);
 T   ALTER TABLE ONLY public.detalle_pedido DROP CONSTRAINT detalle_pedido_productos_fk;
       public          postgres    false    4752    233    220            �           2606    17128 0   detalle_ventas detalle_ventas_cabecera_ventas_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.detalle_ventas
    ADD CONSTRAINT detalle_ventas_cabecera_ventas_fk FOREIGN KEY (cabecera_ventas) REFERENCES public.cabecera_venta(codigo_cv);
 Z   ALTER TABLE ONLY public.detalle_ventas DROP CONSTRAINT detalle_ventas_cabecera_ventas_fk;
       public          postgres    false    224    226    4756            �           2606    17133 )   detalle_ventas detalle_ventas_producto_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.detalle_ventas
    ADD CONSTRAINT detalle_ventas_producto_fk FOREIGN KEY (producto) REFERENCES public.productos(codigo_prod);
 S   ALTER TABLE ONLY public.detalle_ventas DROP CONSTRAINT detalle_ventas_producto_fk;
       public          postgres    false    4752    220    226            �           2606    17109 ,   historial_stock historial_stock_productos_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.historial_stock
    ADD CONSTRAINT historial_stock_productos_fk FOREIGN KEY (producto) REFERENCES public.productos(codigo_prod);
 V   ALTER TABLE ONLY public.historial_stock DROP CONSTRAINT historial_stock_productos_fk;
       public          postgres    false    4752    220    222            �           2606    17097 !   productos productos_categorias_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.productos
    ADD CONSTRAINT productos_categorias_fk FOREIGN KEY (categoria) REFERENCES public.categorias(codigo_cat);
 K   ALTER TABLE ONLY public.productos DROP CONSTRAINT productos_categorias_fk;
       public          postgres    false    4746    220    216            �           2606    17092 &   productos productos_unidades_medida_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.productos
    ADD CONSTRAINT productos_unidades_medida_fk FOREIGN KEY (udm) REFERENCES public.unidades_medida(codigo_udm);
 P   ALTER TABLE ONLY public.productos DROP CONSTRAINT productos_unidades_medida_fk;
       public          postgres    false    218    220    4750            �           2606    17153 *   proveedores proveedores_tipo_documentos_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.proveedores
    ADD CONSTRAINT proveedores_tipo_documentos_fk FOREIGN KEY (tipo_documento) REFERENCES public.tipo_documento(codigo_td);
 T   ALTER TABLE ONLY public.proveedores DROP CONSTRAINT proveedores_tipo_documentos_fk;
       public          postgres    false    227    4760    229            �           2606    17080 )   unidades_medida unidades_medida_y_cudm_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.unidades_medida
    ADD CONSTRAINT unidades_medida_y_cudm_fk FOREIGN KEY (categoria_udm) REFERENCES public.categorias_unidad_medida(codigo_cdm);
 S   ALTER TABLE ONLY public.unidades_medida DROP CONSTRAINT unidades_medida_y_cudm_fk;
       public          postgres    false    217    218    4748            L   @   x�3�44�42�0570�4202�54�52��2�)c��1ɘ��g0�Ns2A\1z\\\ g��      E   x   x�]ͱ!D��� ��Vjq5��U�N.{�~IA˪�H��1�`��O���0i����qex"'��(�N��F�x�H�T���G�����>"�;��\���ō&�;z���5�      =   u   x�3��M,I-�LT(��M���2�(�/I��K�4�2�N�)N,2M8J�J�RR�R�J�jM9�R�2S��&\f���y
�9���9��\����|C#N���KR�AZc���� LU$~      >   )   x����LILI-�
���)�M��
�H-������ �I	�      N   g   x�-��@D��
 ���b5�cUV"K6|qr3
='/��������5�U�2�B��工���YbX([�Dq�Ņ��648uВ����l9I�'�x�"      G   c   x�m��	�@D�I$����b5�cUVb\� C�A^&�Z%I%�r'��X>�VBԨ���.;�2pCm��4�r�����,��K��*9a8�}e�wF2V      I   #   x�����t�qt��
�ru�t�2c���� mg�      C   �   x���1�0�9>E�Ω��49R;����EZZ�H����o�H�A�9�p硿�OϮ@r��(n����4������m��쐨L��h��G�4H^�D--�T�u;N7P�1V�y�L=k����+�#�(,�J^�~�d���Hז��:�S�      A   �   x�e�1
�0����S� "�m�t.�	��˳F[Rm�t�<.���xcZb�����PٚXmb����$�/�f�����
S�3����Hp9�[)#�e�p�a=��93�4�H񹕗��5=����%g��N�jNJ�T7������%�e���A�~Xx�_"���N�      J   �   x�M���0��O�' m���6��8��RZ�Ha���0 �w��Nj��9k������#����AX��'q�y	��2��"����c��-�[�^PvX������H�y���p���"o:?���7��@C�����.�>c��;;�      H      x�s�tvu	�q�
�
u����� .��      ?   O   x���������b�0�N8���4/3%1�3�+�3%?95/�L�L/J�*��N����ɇ�s�����A�=... ���     