// This is test code to see if we can build custom handlers *and* serve an odata service via cds.

async function serve(){
    const express = require('express');
    const app = express();
    const cds = await require('@sap/cds').connect();
    const port = process.env.PORT || 3000;
    
    app.get('/', (req, res) => res.send('Hi there. Try /addRandomBook'));
    cds.serve('all').at('/odata').in(app); // This triggers a CDS compilation error
    
    // Sample service that adds a random tag
    app.get('/addRandomBook', (req, res) => {
        const ql = cds.ql;
        const INSERT = ql.INSERT;
        var Books = cds.entities.Books;
        var id = Math.floor(Math.random()*100000);
        var insert = INSERT.into(Books).columns(
            'ID', 'title', 'stock'
        ).values(
            id, 'Title' + id, id
        );
        cds.run(insert);
        res.send(`Created book ${id}`);
    });
    
    app.listen(port, () => console.log(`Example app listening on port ${port}!`));
}

serve();
