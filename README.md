# README


*pg
sudo apt-get install postgresql postgresql-contrib
error compile gem pg -> libpq-dev
sudo -u postgres psql ->
CREATE ROLE alex LOGIN 
ENCRYPTED PASSWORD 'qwerty123' 
NOSUPERUSER NOINHERIT CREATEDB NOCREATEROLE;
razreshit auth md5 ->
sudo geany /etc/postgresql/9.5/main/pg_hba.conf -> peer to md5
sudo service postgresql restart

*sphinx
index: rake ts:index
start demon: rake ts:start
error compile gem mysql12 -> libmysqlclient-dev

*gem 'delayed_job_active_record'
rails g delayed_job:active_record