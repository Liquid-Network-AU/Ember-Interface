CREATE TABLE repositories (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    created_at TIMESTAMPZ DEFAULT NOW()
);

CREATE TABLE files (
    id SERIAL PRIMARY KEY,
    repository_id INT REFERENCES repositories(id),
    filename TEXT NOT NULL,
    file_url TEXT NOT NULL,
    created_at TIMESTAMPZ DEFAULT NOW()
);