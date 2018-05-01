# README

mini_magick_rocessing_error => apt-get install imagemagick
sudo iptables -t nat -I PREROUTING -p tcp --dport 80 -j REDIRECT --to-ports 3000

*pg
sudo sh -c "echo 'deb http://apt.postgresql.org/pub/repos/apt/ xenial-pgdg main' > /etc/apt/sources.list.d/pgdg.list"
wget --quiet -O - http://apt.postgresql.org/pub/repos/apt/ACCC4CF8.asc | sudo apt-key add -
sudo apt-get update
sudo apt-get install postgresql-common
sudo apt-get install postgresql-9.5 libpq-dev

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

*установка пакетов для rails
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update
sudo apt-get install git-core curl zlib1g-dev build-essential libssl-dev libreadline-dev libyaml-dev libsqlite3-dev sqlite3 libxml2-dev libxslt1-dev libcurl4-openssl-dev python-software-properties libffi-dev nodejs yarn

*rvm
sudo apt-get install libgdbm-dev libncurses5-dev automake libtool bison libffi-dev
gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3
curl -sSL https://get.rvm.io | bash -s stable
source ~/.rvm/scripts/rvm
rvm install 2.5.0
rvm use 2.5.0 --default
ruby -v

gem install bundle

*git conf
git config --global color.ui true
git config --global user.name "YOUR NAME"
git config --global user.email "YOUR@EMAIL.com"
ssh-keygen -t rsa -b 4096 -C "YOUR@EMAIL.com"

cat ~/.ssh/id_rsa.pub

*nodejs
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs

gem install rails

*mysql
sudo apt-get install mysql-server mysql-client libmysqlclient-dev

*webpack
npm install actioncable-modules --save
            jquery jquery_ujs
