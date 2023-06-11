# 1 - api
create env file and copy contents of env.example file
add exchange rate api url from https://www.exchangerate-api.com/
run "npm install"
run "npm start"

navigate to {{baseUrl}}/api/loans/repayment GET
accepts optional json request body of {
    "principal" : number,
	"tenure": number,
	"rate": number
}

default values are 
{
    "principal" : 100,
	"tenure": 10,
	"rate": 2
}

# 2 - alogrithm
run "npm install"
run "tsc"
run "node app"

optional: add test cases in app.ts
