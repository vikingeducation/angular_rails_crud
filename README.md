# angular_rails_crud
Coding Regularly Underpins Delight

[An AngularJS and Ruby on Rails project with JavaScript, Restangular, routing, Devise, authentication, and, of course, CRUD](http://www.vikingcodeschool.com)

[Angular-devise service](https://github.com/cloudspace/angular_devise) used for integrating Angular with Devise.  Auth patterns from https://thinkster.io/angular-rails and https://medium.com/opinionated-angularjs/techniques-for-authentication-in-angularjs-applications-7bbf0346acec#.qln4nrlfh

Look out for CSRF issues, updated the base application_controller.rb
```
class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session, only: Proc.new { |c| c.request.format.json? }
end
```