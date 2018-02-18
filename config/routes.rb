Rails.application.routes.draw do
  get '*url/edit', to: 'documents#edit', as: 'document_edit'
  get '*url', to: 'documents#show'
end
