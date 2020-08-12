json.extract! todo, :id, :title, :body, :isDone
json.tags todo.tags do |tag|
  json.id tag.id
  json.name tag.name
end
