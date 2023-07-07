create table
  repositories (
    id SERIAL primary key,
    name text not null,
    description text,
    created_at TIMESTAMPTZ default now(),
    owner_id uuid references profiles (id)
  );

create table
  files (
    id SERIAL primary key,
    repository_id int references repositories (id),
    filename text not null,
    file_url text not null,
    created_at TIMESTAMPTZ default now()
  );