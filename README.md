# agi-number-archer-app

Sample app for #npm [agi-number-archer](http://github.com/antirek/agi-number-archer)

Use this sample app for creating your working app with your settings.


## Install

1.Clone this repo

> git clone https://github.com/antirek/agi-number-archer-app.git

2.Install deps

> npm install

3.Configure

> nano config.js

4.Run

> node app.js   

//or use pm2 cmd: 

> pm2 start app.js --name "agi-number-archer"


## Sample config.js
`````
{
    port: 3000,     // port
    debug: true,    // show debug info
    mongo: {        // mongo settings
      connectionString: 'mongodb://localhost/regions',  
      collection: 'regions'
    },
    asterisk: {     // asterisk variables
      agiParamName: 'agi_arg_1',
      resultDialPlanVarName: 'REGION_CODE',  // returned dialplan variable (see installation step 4)
      beep: false   // enable if want listen when agi work : )
    },
    logger: {       //write log use npm winston
        console: {            //to console
            colorize: true            
        },
        syslog: {             //to syslog
            host: 'localhost'            
        },
        file: {               //to file
            filename: '/var/log/agi-number-archer.log',
            json: false
        }
    }
};
`````

## Where data?

Use #npm [numcap-regions](http://github.com/antirek/numcap-regions) for load data to mongodb

