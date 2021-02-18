// Tiene como objetivo hacer una abstracción de mis funciones
// que solitan la info a la base de datos.


const createModelKnex = (knex ,table, returningData, tableId) =>  {

    const create = (body) => {
        return knex
            .insert(body)
            .returning(returningData)
            .into(table)
    };
    
    const findAll = () => {
        return knex
            .select(returningData)
            .from(table)
    
    }
    
    const findOne = (id) => {
        return knex
            .select(returningData)
            .from(table)
            .where({ [tableId]: id });
    }
    
    const update = (id, bodyToUpdate) => {
        return knex
            .update(bodyToUpdate)
            .from(table)
            .where({ [tableId]: id })
            .returning(returningData)
    }
    
    const destroy = (id) => {
        return knex
            .del()
            .from(table)
            .where({ [tableId]: id });
    }
    
    const delit = (id) => {       
        return knex
            .update({ active: false })
            .from(table)
            .where({ [tableId]: id })
    }
    
    return {
        create,
        findAll,
        findOne,
        update,
        destroy,
        delit,
    }

}


module.exports = createModelKnex;
