First clone the repo

**Server**

1) cd octopus/server
2) install Python 3.9.12 (this version should be your default python3 version)
3) python3 -m venv venv
source venv/bin/activate
4) pip3 install -r requirements.txt
5) ./manage.py migrate
6) ./manage.py loaddata products
7) ./manage.py runserver 8000

**Frontend**

  
1) cd octopus/client
2) yarn install
3) yarn start

**Run Frontend Tests**

1) cd octopus/client
2) yarn test

**Storybook**

1) cd octopus/client
2) yarn storybook
