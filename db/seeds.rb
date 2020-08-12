u = User.new
u.username = 'joebizness'
u.password = 'P4nth3r$'
u.password_confirmation = 'P4nth3r$'
u.save
u2 = User.new
u2.username = 'punintended'
u2.password = 'hunter123'
u2.password_confirmation = 'hunter123'
u2.save
Todo.create(user_id: 1, title: 'wash car', body: 'with soap', isDone: false)
Todo.create(user_id: 1, title: 'wash dog', body: 'with shampoo', isDone: false)
Todo.create(user_id: 2, title: 'wash hair', body: 'don\'t forget to condition', isDone: false)
Todo.create(user_id: 2, title: 'brush teeth', body: 'with toothpaste', isDone: false)
Todo.create(user_id: 2, title: 'cook dinner', body: 'meat is on the menu bois', isDone: false)

Step.create(title: 'grab bucket', todo_id: 1)
Step.create(title: 'fill bucket with soapy water', todo_id: 1)
Step.create(title: 'get sponge', todo_id: 1)
Step.create(title: 'get washin\'', todo_id: 1)

Step.create(title: 'get pan', todo_id: 5)
Step.create(title: 'get veg', todo_id: 5)
Step.create(title: 'get meat', todo_id: 5)
Step.create(title: 'cook meat', todo_id: 5)
Step.create(title: 'cook veg', todo_id: 5)
Step.create(title: 'plate up', todo_id: 5)

Tag.create(name: 'Work')
Tag.create(name: 'Fitness')
Tag.create(name: 'Errands')
Tag.create(name: 'Self-Improvement')
Tag.create(name: 'Home Improvement')

t = Todo.first
t.tag_names=(["errands", "home Improvement"])