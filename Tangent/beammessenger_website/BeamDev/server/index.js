
const express = require('express');
const cors = require('cors');
const pg = require('pg');
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const cn = {
    database: 'beamv2',
    port: 5432,
    host: '178.128.239.203',
    user: 'beamv2',
    password: 'beamv2'
};
const EmailService = require('./EmailService');

// path to your HTML template
var subject = 'Thank you for registering with us!';
var text = '';
var html = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <link href="https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Beam Confirmation</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>

<body style="margin:0; padding:10px 0 0 0;" bgcolor="#e6e7e8">
    <table align="center" border="0" cellpadding="0" cellspacing="0" width="95%%">
        <tr>
            <td align="center">
                <table align="center" border="0" cellpadding="0" cellspacing="0" width="600px" style="border-collapse: separate; border-spacing: 2px 5px; box-shadow: 1px 0 1px 1px #B8B8B8;" bgcolor="#FFFFFF">
                    <tr>
                        <td align="center" style="padding: 10px 5px 5px 5px;" bgcolor="#414042">
                            <a href="http://www.beamplatform.com" target="_blank">
                                <img src="cid:beamcall_logo.png" alt="Logo" style="width:40%;border:0;" />
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="padding-top: 25px;">
                            <!-- Initial relevant banner image goes here under src-->
                            <img src="cid:phone.gif" alt="Image Banner" style="display: block;border:0;height:180px;width:155px" />
                        </td>
                    </tr>
                    <tr>
                        <td bgcolor="#ffffff" style="padding: 10px 30px 40px 30px;">
                            <table border="0" cellpadding="0" cellspacing="0" width="100%%">
                                <tr>
                                    <td style="padding: 10px 0 0 0; font-family: Montserrat, sans-serif; font-size: 18px; color:#414042; ">
                                        <!-- Initial text goes here-->
                                        <b>Thank you for signing up for the BeamCall app! </b><br><br>
                                        <p style="color:#808284; font-size: 14px; margin-bottom:40px;">
                                        Welcome to the world of Multiformat Communications, where "cloud memories" are generated from simply talking, noone has to be the fall guy for not taking notes, and everyone begins to appear just a little bit smarter.
                                        We here are convinced this technology will help usher in the next shift towards Phone 2.0, and this change is inevitable. By creating the single most intuitive interface to tap into the new goldmine of data, we hope 
                                        to remove to need to "remember" and help focus on simply conversing.</p>
                                        
                                        <p style="color:#808284; font-size: 14px;">With your spot secured, you will be one of the first people to get in on early access. In the meantime, please invite your friends to sign up so you actually have someone to talk to over BeamCall :]
                                        We welcome your opinion and feedback on this awesome new Multiformat technology! Please visit our <a href="https://multiformat-slack.herokuapp.com/" style="text-decoration:none"  target="_blank"><b><font color="414042">Slack channel</font></b>
                                        </a> and our <a href="https://www.facebook.com/groups/1501459256655010" style="text-decoration:none" target="_blank"><b><font color="414042">Facebook group</font></b></a> to continue this conversation.
                                        See you soon!
                                        <br><br>

                                        - Beam Team</p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <tr>
                        <td bgcolor="#414042">
                            <table border="0" align="center" cellpadding="0" cellspacing="0" width="250" style="padding: 20px 10px 10px 10px;">
                                <tr>

                                    <td valign="top" style="padding: 0 0 10px 0; width:260px" align="center">

                                        <table>
                                            <tr>
                                                <td align="center">
                                                    <a href="https://www.facebook.com/beamplatform/" target="_blank">
                                                        <img src="cid:fb.png" alt="Facebook" style="display: block; " />
                                                    </a>
                                                </td>
                                            </tr>

                                        </table>
                                    </td>

                                    <td valign="top" style="padding: 0 0 10px 0; width:260px">
                                        <table>
                                            <tr>
                                                <td align="center">
                                                    <a href="https://twitter.com/Beam_Messenger" target="_blank">
                                                        <img src="cid:twitter.png" alt="Twitter" style="display: block; " />
                                                    </a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>

                                    <td valign="top" style="padding: 0 0 10px 0; width:260px">
                                        <table>
                                            <tr>
                                                <td align="center">
                                                    <a href="https://www.youtube.com/channel/UCsjul9JNuemx0HOSkWWQweA" target="_blank">
                                                        <img src="cid:youtube.png" alt="YouTube" style="display: block; " />
                                                    </a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>

                                    <td valign="top" style="padding: 0 0 10px 0; width:260px">
                                        <table>
                                            <tr>
                                                <td align="center">
                                                    <a href="https://multiformat-slack.herokuapp.com/" target="_blank">
                                                        <img src="cid:slack.png" alt="Slack" style="display: block; " />
                                                    </a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>




                                     <tr>
                                            <td align="center"  colspan="5" style="padding: 0 0 0 0px; font-family: Montserrat, sans-serif; font-size: 12px; color:#e6e7e8; ">
                                                Have questions? Please use website form or email us <u><a href="mailto:support@beamplatform.com?subject=Welcome inquiry"
                                           style="text-decoration:none">
                                           <font color="#e6e7e8">
                                           here</font></a></u>.
                                            </td>
                                        </tr>

                                </tr>
                            </table>
                        </td>
                    </tr>

                </table>
            </td>
        </tr>
    </table>

    <table align="center" cellpadding="0" cellspacing="0" width="100%" style="padding: 15px 0px 15px 0px;">
        <tr>
            <td align="center" style="padding: 0 0 0 0; font-family: Montserrat, sans-serif; font-size: 10px; color:#414042; ">

                <a href="%unsubscribe_url%" target="_blank"><font color="414042">Unsubscribe</font></a> from these alerts.

            </td>
        </tr>
    </table>
</body>

</html>
<!--
</td>
</tr>
</table>
</td>
</tr>
-->`;
var attachments = [{
    filename: 'beamcall_logo.png',
    path: './beamcall_logo.png',
    cid:'beamcall_logo.png',
    encoding: 'base64'

},
{
filename: 'phone.gif',
path: './phone.gif',
cid:'phone.gif',
encoding: 'base64'

},
{
    filename: 'slack.png',
    path: './slack.png',
    cid:'slack.png',
    encoding: 'base64'

},
{
    filename: 'twitter.png',
    path: './twitter.png',
    cid:'twitter.png',
    encoding: 'base64'

},
{
    filename: 'youtube.png',
    path: './youtube.png',
    cid:'youtube.png',
    encoding: 'base64'

},
{
    filename: 'fb.png',
    path: './fb.png',
    cid:'fb.png',
    encoding: 'base64'

}
]

  
app.use(cors());
// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
const pool = new pg.Pool(cn);

app.get('/api/hello', (req, res) => {
    console.log(__dirname);
    // send mail with defined transport object
    res.send({ express: 'Hello From Express' });
});
app.post('/api/register', (req, res) => {
    var email = req.body.email;
    res.json({ok:true}); // status 200 is default
    console.log(req.body);
    const results = [];
    // Grab data from http request
    console.log(res);
    if(req.body.type === 'C' && req.body.email.length > 0){
        const data = {email: req.body.email, 
            country:req.body.country,
            platform: req.body.platform,
            type: req.body.type
        };
        pool.connect((err, client, done) => {
            // Handle connection errors
            if(err) {
                done();
                console.log(err);
                return res.status(500).json({success: false, data: err});
            }
            // SQL Query > Insert Data
            client.query('SELECT id from beamuser where email=$1', [data.email], (err, res) => {
                if (err) throw err;
                console.log(res.rowCount === 0);
                if(res.rowCount === 0){
                    client.query('INSERT INTO beamuser(email, type) values($1, $2)',
                    [data.email, data.type]);
                    EmailService.sendText(data.email, subject, text, html, attachments)
                    .then(() => {
                        // Email sent successfully
                        console.log('success');
                    })
                    .catch(() => {
                        // Error sending email
                        console.log('error');
                    })
                    client.query('SELECT id from beamuser where email=$1', [data.email], (err, res) => {
                        if (err) throw err
                        console.log(res);
                        pool.connect((err, client, done) => {
                            client.query('INSERT INTO consumer_table(consumerid, platform, country) values($1, $2, $3)',
                            [res.rows[0].id, data.platform, data.country]);
                            done();
                            if(err) { return console.error('error running query', err);  }
                            console.log('finished executing Update query');
                        })
                        client.end();
                    })
                }
            })
            // SQL Query > Insert Data
            
            /*client.query(`
            INSERT INTO consumer_table(consumerid, platform, country) 
            values(SELECT id from beamuser where email = ${data.email}, $1, $2)`,
            [data.platform, data.country]);*/
            // SQL Query > Select Data
        });
    }
    else if(req.body.type === 'E'){
        let countVal;
        if(req.body.count == 10){
            countVal = '< 100';
        }
        else if(req.body.count == 100){
            countVal = '100-1000';
        }
        else if(req.body.count == 1000){
            countVal = '1000-10000';
        }
        else if(req.body.count == 10000){
            countVal = '10000+';
        }
        const data = {
            email: req.body.email,
            name: req.body.name,
            country: req.body.country,
            company_name: req.body.companyName,
            typeindustry: req.body.industryType,
            platform: req.body.platform,
            usercount: countVal,
            type: req.body.type
        }
        pool.connect((err, client, done) => {
            // Handle connection errors
            if(err) {
                done();
                console.log(err);
                return res.status(500).json({success: false, data: err});
            }
            // SQL Query > Insert Data
            client.query('SELECT id from beamuser where email=$1', [data.email], (err, res) => {
                if (err) throw err;
                console.log(res);
                if(res.rowCount === 0){
                    client.query('INSERT INTO beamuser(email, type) values($1, $2)',
                    [data.email, data.type]);
                    EmailService.sendText(data.email, subject, text, html, attachments)
                    .then(() => {
                        // Email sent successfully
                        console.log('success');
                    })
                    .catch(() => {
                        // Error sending email
                        console.log('error');
                    })
                    client.query('SELECT id from beamuser where email=$1', [data.email], (err, res) => {
                        if (err) throw err
                        console.log(res.rows[0].id)
                        pool.connect((err, client, done) => {
                            client.query(`INSERT INTO enterprise_table(enterpriseid, name,
                                 country, company_name, typeindustry, platform, usercount) 
                                 values ($1, $2, $3, $4, $5, $6, $7)`,
                            [res.rows[0].id, data.name, data.country, data.company_name,
                             data.typeindustry, data.platform, data.usercount]);
                            done();
                            if(err) { return console.error('error running query', err);  }
                            console.log('finished executing Update query');
                        })
                        client.end();
                    })
                }
            })

            /*client.query(`
            INSERT INTO consumer_table(consumerid, platform, country) 
            values(SELECT id from beamuser where email = ${data.email}, $1, $2)`,
            [data.platform, data.country]);*/
            // SQL Query > Select Data
        });
        console.log(data)
    }
   
        
});
app.post('/api/sendquestion', (req, res) => {

    var email = '<' + req.body.email + '>';
    var message = req.body.message;
    res.json({ok:true}); // status 200 is default
    let text = message;
    console.log(email);
    EmailService.receiveText(email, 'Question from customer', text);
});
app.listen(port, () => console.log(`Listening on port ${port}`));
/*
const cn = {
        database: 'beamv2',
        port: 5432,
        host: '178.128.239.203',
        user: 'beamv2',
        password: 'beamv2'
};
const app = express();
const pool = new pg.Pool(cn);

app.use(cors());
app.get('/', (req,res)=>{
       pool.connect(function(err,client,done) {
       if(err){
           console.log("not able to get connection "+ err);
           res.status(400).send(err);
       } 
       client.query('SELECT * FROM beamuser', function(err,result) {
           done(); // closing the connection;
           if(err){
               console.log(err);
               res.status(400).send(err);
           }
           res.status(200).send(result);
       });
       pool.end();
    });
})
app.listen(4000, ()=>{
        console.log("product server listening");
});
*/




