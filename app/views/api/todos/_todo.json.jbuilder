json.extract! todo, :id, :title, :body, :isDone
json.tags todo.tags do |tag|
  json.id tag.id
  json.name tag.name
end
json.user do
  json.id todo.user.id
  json.username todo.user.username
end
json.steps todo.steps do |step|
  json.id step.id
end
