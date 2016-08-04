require "sinatra"
require "json"

class ThermAPI < Sinatra::Base

  before do
    headers 'Access-Control-Allow-Origin' => '*'
  end

  get '/' do
    File.read(File.join('index.html'))
  end

  get '/time' do
    {time: Time.now.to_s }.to_json
  end

  get '/temperature' do
    { temp: $temp.to_i }.to_json
  end

  post '/temperature' do
    $temp = params[:temp]
    {status: "ok"}.to_json
  end

  run! if app_file == $0
end
