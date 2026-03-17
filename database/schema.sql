create table patients(
id uuid primary key default uuid_generate_v4(),
name text,
email text,
phone text
);

create table doctors(
id uuid primary key default uuid_generate_v4(),
name text,
specialization text
);

create table appointments(
id uuid primary key default uuid_generate_v4(),
patient_id uuid references patients(id),
doctor_id uuid references doctors(id),
date date,
slot text,
status text default 'confirmed',
created_at timestamp default now()
);