ALTER TABLE actors
ADD COLUMN created_at TIMESTAMP DEFAULT NOW(),
ADD COLUMN updated_at TIMESTAMP DEFAULT NOW();
