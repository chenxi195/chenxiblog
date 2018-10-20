const sequelize = require('./db/_db').sequelize();

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(e => {
    console.error('Unable to connect to the database:', e);
  });

const Page = sequelize.import('./db/page/pagemodel');
const Qz = sequelize.import('./db/qz/qzmodel');


sequelize.sync({force: false})
  // .then(rs => {
  //   return sequelize.query(
  //       "CREATE OR REPLACE VIEW v_project AS SELECT " +
  //       "P.id, P.creator_id, P.name, P.url, P.type, P.editor_id, P.category_id, P.original_id, P.members, P.status, P.createdAt, P.updatedAt, P.basemodel_id, P.modeltype," +
  //       "U.username AS creator_name, " +
  //       "U2.username AS editor_name, "+
  //       "C.name AS category_name, " +
  //       "B.name AS model_name " +
  //       "FROM project AS P " +
  //       "JOIN category AS C ON P.category_id=C.id " +
  //       "JOIN user AS U ON P.creator_id=U.id " +
  //       "LEFT JOIN basemodel AS B ON P.basemodel_id=B.id " +
  //       "JOIN user AS U2 ON P.editor_id=U2.id "
  //   );
  // })
  // .then(rs => {
  //   return sequelize.query('ALTER TABLE Pages ADD COLUMN img varchar(1000) not null;')
  // })
  .then(rs => {
    console.log('sequelize sync success');
    process.exit();
  })
  .catch(e => {
    console.error(e);
    process.exit();
  });