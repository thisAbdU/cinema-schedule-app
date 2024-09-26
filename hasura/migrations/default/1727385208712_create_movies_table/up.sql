CREATE TABLE movies (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    duration INT NOT NULL, -- in minutes
    poster_url TEXT,
    thumbnail_url TEXT,
    avg_rating DECIMAL(3, 2) DEFAULT 0, -- average rating out of 10
    genre genre_type NOT NULL, -- ENUM type for genre
    director_id INT REFERENCES directors(id), -- Foreign key to directors table
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);
