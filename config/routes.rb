Rails.application.routes.draw do
  resource :test, only: :show

  root to: "tests#show"
end
