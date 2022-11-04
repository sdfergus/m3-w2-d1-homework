var MongoClient = require( 'mongodb' ).MongoClient;

//Database name: statsdb
var url = "mongodb://localhost:27017/statsdb";

//Connect to the database
MongoClient.connect( url, {
    useNewUrlParser: true, useUnifiedTopology: true
}, function ( err, db ) {
    // if ( err ) throw err;
    // console.log( 'statsdb created!' );
    // db.close();

    var dbo = db.db( "statsdb" );
    // dbo.createCollection( "uscensus", function ( err, res ) {
    //     if ( err ) throw err;
    //     console.log( "uscensus collection created!" );
    //     db.close();
    // } );

    // var stats = [
    //     {
    //         'city': 'San Juan',
    //         'zip': '00926',
    //         'state': 'PR',
    //         'income': '34781',
    //         'age': '44'
    //     },
    //     {
    //         'city': 'Corona',
    //         'zip': '11368',
    //         'state': 'NY',
    //         'income': '50797',
    //         'age': '32'
    //     },
    //     {
    //         'city': 'Chicago',
    //         'zip': '60629',
    //         'state': 'IL',
    //         'income': '42019',
    //         'age': '31'
    //     },
    //     {
    //         'city': 'El Paso',
    //         'zip': '79936',
    //         'state': 'TX',
    //         'income': '54692',
    //         'age': '31'
    //     },
    //     {
    //         'city': 'Los Angeles',
    //         'zip': '90011',
    //         'state': 'CA',
    //         'income': '36954',
    //         'age': '28'
    //     },
    //     {
    //         'city': 'Norwalk',
    //         'zip': '90650',
    //         'state': 'CA',
    //         'income': '66453',
    //         'age': '35'
    //     }
    // ]

    // dbo.collection( "uscensus" ).insertMany( stats, function ( err, res ) {
    //     if ( err ) throw err;
    //     console.log( "Stats array objects inserted! Length: " + res.insertedCount );
    //     db.close();
    // } )


    // var additionalStats = [
    //     {
    //         'city': 'Pacoima',
    //         'zip': '91331',
    //         'state': 'CA',
    //         'income': '60360',
    //         'age': '33'
    //     },
    //     {
    //         'city': 'Ketchikan',
    //         'zip': '99950',
    //         'state': 'AK',
    //         'income': '00000',
    //         'age': '00'
    //     }
    // ]

    // dbo.collection( "uscensus" ).insertMany( additionalStats, function ( err, res ) {
    //     if ( err ) throw err;
    //     console.log( "Added stats inserted! Length: " + res.insertedCount );
    //     db.close();
    // } )

    // var query = { city: "Corona" };
    // dbo.collection( "uscensus" ).find( query ).toArray( function ( err, result ) {
    //     if ( err ) throw err;
    //     console.log( `The zip code for ${ result[ 0 ].city }, ${ result[ 0 ].state }: ${ result[ 0 ].zip }` );
    //     db.close();
    // } )

    var query = { state: /^C/ };
    dbo.collection( "uscensus" ).find( query ).toArray( function ( err, result ) {
        if ( err ) throw err;
        console.log( `The income for all cities in California:` );
        result.forEach( city => {
            console.log( `${ city.city },${ city.state }: ${ city.income }` );
        } )
        db.close();
    } )



} );
