json.extract! todo, :id, :title, :body, :isDone
json.tags todo.tags do |tag|
  json.name tag.name
end
