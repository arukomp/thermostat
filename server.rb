require 'sinatra'
require 'json'

class ThermAPI < Sinatra::Base
  before do
    headers 'Access-Control-Allow-Origin' => '*'
    $psm  ||=  true
    $temp ||=  20
  end

  get '/' do
    File.read(File.join('index.html'))
  end

  get '/time' do
    { time: Time.now.to_s }.to_json
  end

  get '/temperature' do
    { temp: $temp.to_i, psm: $psm }.to_json
  end

  post '/temperature' do
    $temp = params[:temp]
    $psm  = params[:psm] == 'true' ? true : false
    { status: 'ok' }.to_json
  end

  run! if app_file == $0
end
