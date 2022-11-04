export DBHOST=localhost
export DBUSER=eru
export DBNAME=arda
export DBDIALECT=postgres
export DBPASSWORD=mordor
export DBPORT=5002

export BROKER_URL=redis://localhost:5001/0

export PORT=3081

remote_envrc="env.remote.sh"
if test -f "$remote_envrc"; then
  echo "$remote_envrc exists."
  source $remote_envrc
fi
