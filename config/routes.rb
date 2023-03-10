Rails.application.routes.draw do
  resource :test, only: [:edit, :show]

  root to: "tests#show"
end
