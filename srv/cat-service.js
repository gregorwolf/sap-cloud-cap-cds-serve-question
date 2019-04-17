module.exports = (srv) => {
    srv.before ('addRandomBook', async (req) => {
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
        req.reply(`Created book ${id}`);
    })
}