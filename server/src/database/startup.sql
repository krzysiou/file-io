-- USER

CREATE TABLE users (
   id         VARCHAR(255) NOT NULL PRIMARY KEY,
   username   VARCHAR(255) NOT NULL, 
   password   VARCHAR(255) NOT NULL
);

-- FILE

CREATE TABLE files (
    file_id          VARCHAR(255) NOT NULL PRIMARY KEY,
    title            VARCHAR(255) NOT NULL,
    type             VARCHAR(255) NOT NULL,
    date_of_creation NUMERIC NOT NULL,
    date_of_update   NUMERIC,
    user_id          VARCHAR(255) NOT NULL,
    CONSTRAINT fk_user_file FOREIGN KEY (user_id) REFERENCES users(id)
);

-- WYPIS

CREATE TABLE wypis_forms (
    form_id         VARCHAR(255) NOT NULL PRIMARY KEY,
    name            VARCHAR(255) NOT NULL,
    surname         VARCHAR(255) NOT NULL,
    album_number    VARCHAR(255) NOT NULL,
    email           VARCHAR(255) NOT NULL,
    field_of_study  VARCHAR(255) NOT NULL,
    faculty         VARCHAR(255) NOT NULL,
    dean            VARCHAR(255) NOT NULL,
    file_id         VARCHAR(255) NOT NULL,
    CONSTRAINT fk_file_wypis FOREIGN KEY (file_id) REFERENCES files(file_id)
);

-- PRZEPIS

CREATE TABLE przepis_forms (
    form_id         VARCHAR(255) NOT NULL PRIMARY KEY,
    name            VARCHAR(255) NOT NULL,
    surname         VARCHAR(255) NOT NULL,
    album_number    VARCHAR(255) NOT NULL,
    email           VARCHAR(255) NOT NULL,
    field_of_study  VARCHAR(255) NOT NULL,
    dean            VARCHAR(255) NOT NULL,
    level           VARCHAR(255) NOT NULL,
    year            VARCHAR(255) NOT NULL,
    term_type       VARCHAR(255) NOT NULL,
    file_id         VARCHAR(255) NOT NULL,
    CONSTRAINT fk_file_wypis FOREIGN KEY (file_id) REFERENCES files(file_id)
);

CREATE TABLE przepis_subjects (
    subject_id          VARCHAR(255) NOT NULL PRIMARY KEY,
    name                VARCHAR(255) NOT NULL,
    type                VARCHAR(255) NOT NULL,
    grade               NUMERIC  NOT NULL,
    date_of_completion  VARCHAR(255) NOT NULL,
    form_id             VARCHAR(255) NOT NULL,
    CONSTRAINT fk_przepis_subject FOREIGN KEY (form_id) REFERENCES przepis_forms(form_id)
);

-- SPZ

CREATE TABLE spz_forms (
    form_id         VARCHAR(255) NOT NULL PRIMARY KEY,
    name            VARCHAR(255) NOT NULL,
    surname         VARCHAR(255) NOT NULL,
    album_number    VARCHAR(255) NOT NULL,
    field_of_study  VARCHAR(255) NOT NULL,
    email           VARCHAR(255) NOT NULL,
    level           VARCHAR(255) NOT NULL,
    term            VARCHAR(255) NOT NULL,
    year            VARCHAR(255) NOT NULL,
    dean            VARCHAR(255) NOT NULL,
    file_id         VARCHAR(255) NOT NULL,
    CONSTRAINT fk_file_wypis FOREIGN KEY (file_id) REFERENCES files(file_id)
);

CREATE TABLE spz_main_subjects (
    subject_id          VARCHAR(255) NOT NULL PRIMARY KEY,
    name                VARCHAR(255) NOT NULL,
    wclps               VARCHAR(255) NOT NULL,
    ects                VARCHAR(255) NOT NULL,
    form_id             VARCHAR(255) NOT NULL,
    CONSTRAINT fk_przepis_subject FOREIGN KEY (form_id) REFERENCES spz_forms(form_id)
);

CREATE TABLE spz_side_subjects (
    subject_id          VARCHAR(255) NOT NULL PRIMARY KEY,
    name                VARCHAR(255) NOT NULL,
    wclps               VARCHAR(255) NOT NULL,
    ects                VARCHAR(255) NOT NULL,
    faculty             VARCHAR(255) NOT NULL,
    form_id             VARCHAR(255) NOT NULL,
    CONSTRAINT fk_przepis_subject FOREIGN KEY (form_id) REFERENCES spz_forms(form_id)
);