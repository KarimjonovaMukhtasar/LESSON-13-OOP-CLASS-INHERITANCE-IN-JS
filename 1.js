/*
HOMEWORK:
CREATE A DATABASE CLASS WHICH INCLUDES THE FOLLOWING METHODS:
// addOne
// addMany
// createOne 
// createMany 
// updateOne 
// updateMany 
// findAll 
// findOne 
// deleteOne 
// deleteMany
*/
class Database{
    constructor(){
       this.data = []
    }
    createOne(id, name, age, profession, status){
        let newUser = {}
        newUser.id = id
        newUser.name = name
        newUser.age = age
        newUser.profession = profession
        newUser.status = status
        this.data.push(newUser)
        console.log(newUser, "HAS BEEN CREATED")
    }
    createMany(usersData){
        for(let key of usersData){
            let newUser = {}
            newUser.id = key.id
            newUser.name = key.name
            newUser.age = key.age
            newUser.profession = key.profession
            newUser.status = key.status
            this.data.push(newUser)
        }
        console.log(usersData, "Have been created")
    }
    addOne(user){
        if(!this.data.includes(user)){
            this.data.push(user)
            console.log(user,"has been added to the database")
        }
        else{
            console.log(user,`is already in database`)
        }
    }
    addMany(usersArray){
        let existed = usersArray
        let added = []
        for(let key of usersArray){
            if(!this.data.includes(key)){
                this.data.push(key)
                added.push(key)
                let index = this.data.indexOf(key)
                existed.splice(index,1)
            }
        }
        console.log(`THE FOLLOWING USERS HAVE BEEN ADDED TO THE DATABASE:`)
        console.log(added)
        console.log(`YET THESE ARE ALREADY IN DATABASE, CHECK THE SPELLING:`)
        console.log(existed)
    }
   updateOne(id, changesObj){
    let check = false
        for(let key of this.data){
            if(key.id === id){
                Object.assign(key, changesObj)
                console.log(id,`numbered user has been updated`)
                check = true
                break
            }
        }
        if(!check){
            console.log(id,`not found such a numbered id, check the spelling`)
        }
        return this.data
   }
   updateMany(changesObjs){
    let notfound = []
    for(let key of changesObjs){
        let index = this.data.findIndex(item => item.id === key.id);
        if (index !== -1) {
            this.data[index] = key;
            console.log(key, "has been updated");
        } else {
            notfound.push(key.id);
        }
}
    console.log(`THE FOLLOWIND ID NOT FOUND:`)
    console.log(notfound)
    }
    findOne(id){
        let check = false
        for(let key of this.data){
            if(key.id === id){
                check = true
                return key
            }
        }
        if(!check){
            console.log(id,"not found, check the spelling!")
        }
    }
    findMany(idsArr){
        let res = []
        let notFound = idsArr
        for(let key of this.data){
            if(idsArr.includes(key.id)){
                res.push(key)
                let index = idsArr.indexOf(key.id)
                notFound.splice(index,1)
            }
        }
        console.log(`THE FOLLOWING USERS ARE FOUND:`)
        console.log(res)
        if(notFound.length >= 1){
        console.log(`THE FOLLOWING IDS ARE NOT FOUND`)
        console.log(notFound)
        }
    }
    deleteOne(id){
        let check = false
        for(let key of this.data){
            if(key.id === id){
                let index = this.data.indexOf(key)
                this.data.splice(index,1)
                console.log(id,"numbered has been deleted")
                check = true
            }
        }
        if(!check){
            console.log(id,"not found")
        }
        console.log(this.data)
    }
    deleteMany(idsArr){
        let notfound = idsArr
        for(let key of this.data){
            if(idsArr.includes(key.id)){
                let index = this.data.indexOf(key)
                notfound.splice(index,1)
                this.data.splice(index,1)
            }
        }
        console.log(notfound,`do not exist in database`)
        console.log(this.data)
    }
   }
let students = new Database()
students.createOne(1,"Ali",22,"student","active")
students.createMany([{id:2, name:"Sarvar", age: 32, profession:"Developer", status:"passive"},
        {id:3, name:"Salim", age: 16, profession:"Lyceum student", status:"active"}])
students.addOne({id:4, name:"Nurbek", age: 28, profession:"Shop assistant", status:"active"})
students.addMany([{id:5, name:"Oypopuk", age: 42, profession:"Nurse", status:"passive"},
        {id:6, name:"Haniya", age: 39, profession:"Nanny", status:"passive"}])
students.updateOne(1, {id:1,name:"Ali",age:22,profession:"student",status:"passive"})
students.updateMany([{id:3, name:"Sarvinoz", age: 12, profession:"pupil", status:"active"},
        {id:5, name:"Karima", age: 22, profession:"Waitress", status:"active"}])
students.findOne(5)
students.findOne(45)
students.findMany([1,18,6])
students.deleteOne(5)
students.deleteOne(8)
students.deleteMany([1,5,27,18])
