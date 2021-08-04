--same as migration from phpmyAdmin sql export (working with DB use migrations)
CREATE TABLE IF NOT EXISTS students (
    `id` int primary key auto_increment ,
    `name` varchar 
);