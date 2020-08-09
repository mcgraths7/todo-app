Todo.create(title: 'wash car', body: 'with soap', isDone: false)
Todo.create(title: 'wash dog', body: 'with shampoo', isDone: false)
Todo.create(title: 'wash hair', body: 'don\'t forget to condition', isDone: false)
Todo.create(title: 'brush teeth', body: 'with toothpaste', isDone: false)
Todo.create(title: 'cook dinner', body: 'meat is on the menu bois', isDone: false)

Step.create(title: 'grab bucket', todo_id: 1)
Step.create(title: 'fill bucket with soapy water', todo_id: 1)
Step.create(title: 'get sponge', todo_id: 1)
Step.create(title: 'get washin\'', todo_id: 1)

Tag.create(name: 'Work')
Tag.create(name: 'Fitness')
Tag.create(name: 'Errands')
Tag.create(name: 'Self-Improvement')
Tag.create(name: 'Home Improvement')

t = Todo.first
t.tag_names=(["errands", "home Improvement"])