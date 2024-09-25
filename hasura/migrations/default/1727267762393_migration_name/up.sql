SET check_function_bodies = false;
CREATE TYPE public.genre_type AS ENUM (
    'Scifi',
    'Action',
    'Comedy',
    'Drama',
    'Romantic',
    'Horror'
);
CREATE TABLE public.actors (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    bio text,
    birthdate date
);
CREATE SEQUENCE public.actors_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.actors_id_seq OWNED BY public.actors.id;
CREATE TABLE public.bookmarks (
    id integer NOT NULL,
    user_id integer,
    movie_id integer,
    created_at timestamp without time zone DEFAULT now()
);
CREATE SEQUENCE public.bookmarks_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.bookmarks_id_seq OWNED BY public.bookmarks.id;
CREATE TABLE public.directors (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    bio text,
    birthdate date
);
CREATE SEQUENCE public.directors_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.directors_id_seq OWNED BY public.directors.id;
CREATE TABLE public.movie_actors (
    movie_id integer NOT NULL,
    actor_id integer NOT NULL
);
CREATE TABLE public.movie_schedules (
    id integer NOT NULL,
    movie_id integer,
    show_date date NOT NULL,
    show_time time without time zone NOT NULL
);
CREATE SEQUENCE public.movie_schedules_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.movie_schedules_id_seq OWNED BY public.movie_schedules.id;
CREATE TABLE public.movies (
    id integer NOT NULL,
    title character varying(100) NOT NULL,
    description text NOT NULL,
    duration integer NOT NULL,
    poster_url text,
    thumbnail_url text,
    avg_rating numeric(3,2) DEFAULT 0,
    genre public.genre_type NOT NULL,
    director_id integer,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now()
);
CREATE SEQUENCE public.movies_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.movies_id_seq OWNED BY public.movies.id;
CREATE TABLE public.ratings (
    id integer NOT NULL,
    user_id integer,
    movie_id integer,
    rating_value integer,
    rating_text character varying(20),
    created_at timestamp without time zone DEFAULT now(),
    CONSTRAINT ratings_rating_text_check CHECK (((rating_text)::text = ANY ((ARRAY['Poor'::character varying, 'Fair'::character varying, 'Good'::character varying, 'Very Good'::character varying, 'Excellent'::character varying])::text[]))),
    CONSTRAINT ratings_rating_value_check CHECK (((rating_value >= 5) AND (rating_value <= 10)))
);
CREATE SEQUENCE public.ratings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.ratings_id_seq OWNED BY public.ratings.id;
CREATE TABLE public.sample (
    id integer NOT NULL
);
COMMENT ON TABLE public.sample IS 'sample table';
CREATE SEQUENCE public.sample_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.sample_id_seq OWNED BY public.sample.id;
CREATE TABLE public.tickets (
    id integer NOT NULL,
    user_id integer,
    movie_schedule_id integer,
    seat_number character varying(10) NOT NULL,
    price numeric(10,2) NOT NULL,
    booked_at timestamp without time zone DEFAULT now()
);
CREATE SEQUENCE public.tickets_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.tickets_id_seq OWNED BY public.tickets.id;
CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying(50) NOT NULL,
    email character varying(100) NOT NULL,
    password character varying(255) NOT NULL,
    role character varying(20) DEFAULT 'user'::character varying,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now()
);
CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
ALTER TABLE ONLY public.actors ALTER COLUMN id SET DEFAULT nextval('public.actors_id_seq'::regclass);
ALTER TABLE ONLY public.bookmarks ALTER COLUMN id SET DEFAULT nextval('public.bookmarks_id_seq'::regclass);
ALTER TABLE ONLY public.directors ALTER COLUMN id SET DEFAULT nextval('public.directors_id_seq'::regclass);
ALTER TABLE ONLY public.movie_schedules ALTER COLUMN id SET DEFAULT nextval('public.movie_schedules_id_seq'::regclass);
ALTER TABLE ONLY public.movies ALTER COLUMN id SET DEFAULT nextval('public.movies_id_seq'::regclass);
ALTER TABLE ONLY public.ratings ALTER COLUMN id SET DEFAULT nextval('public.ratings_id_seq'::regclass);
ALTER TABLE ONLY public.sample ALTER COLUMN id SET DEFAULT nextval('public.sample_id_seq'::regclass);
ALTER TABLE ONLY public.tickets ALTER COLUMN id SET DEFAULT nextval('public.tickets_id_seq'::regclass);
ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
ALTER TABLE ONLY public.actors
    ADD CONSTRAINT actors_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.bookmarks
    ADD CONSTRAINT bookmarks_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.bookmarks
    ADD CONSTRAINT bookmarks_user_id_movie_id_key UNIQUE (user_id, movie_id);
ALTER TABLE ONLY public.directors
    ADD CONSTRAINT directors_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.movie_actors
    ADD CONSTRAINT movie_actors_pkey PRIMARY KEY (movie_id, actor_id);
ALTER TABLE ONLY public.movie_schedules
    ADD CONSTRAINT movie_schedules_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.movies
    ADD CONSTRAINT movies_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.ratings
    ADD CONSTRAINT ratings_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.ratings
    ADD CONSTRAINT ratings_user_id_movie_id_key UNIQUE (user_id, movie_id);
ALTER TABLE ONLY public.sample
    ADD CONSTRAINT sample_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.tickets
    ADD CONSTRAINT tickets_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);
ALTER TABLE ONLY public.bookmarks
    ADD CONSTRAINT bookmarks_movie_id_fkey FOREIGN KEY (movie_id) REFERENCES public.movies(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.bookmarks
    ADD CONSTRAINT bookmarks_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.movie_actors
    ADD CONSTRAINT movie_actors_actor_id_fkey FOREIGN KEY (actor_id) REFERENCES public.actors(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.movie_actors
    ADD CONSTRAINT movie_actors_movie_id_fkey FOREIGN KEY (movie_id) REFERENCES public.movies(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.movie_schedules
    ADD CONSTRAINT movie_schedules_movie_id_fkey FOREIGN KEY (movie_id) REFERENCES public.movies(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.movies
    ADD CONSTRAINT movies_director_id_fkey FOREIGN KEY (director_id) REFERENCES public.directors(id);
ALTER TABLE ONLY public.ratings
    ADD CONSTRAINT ratings_movie_id_fkey FOREIGN KEY (movie_id) REFERENCES public.movies(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.ratings
    ADD CONSTRAINT ratings_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.tickets
    ADD CONSTRAINT tickets_movie_schedule_id_fkey FOREIGN KEY (movie_schedule_id) REFERENCES public.movie_schedules(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.tickets
    ADD CONSTRAINT tickets_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;
