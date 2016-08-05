require "sinatra"
require "json"

class ThermostatAPI < Sinatra::Base
  set :public_folder, proc { File.join(root) }

  get '/time' do
    response = {
      time: Time.now.to_s,
      city: "London"
    }
    response.to_json
  end

  run! if app_file == $0
end
