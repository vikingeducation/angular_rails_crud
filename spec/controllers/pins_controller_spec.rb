require 'rails_helper'

RSpec.describe PinsController, type: :controller do

  let(:pin){ create(:pin) }

  describe "GET /pins/index.json" do

    let(:data){ JSON.parse(response.body) }

    before do
      get :index, format: :json
    end

    it 'should respond with a success' do
    expect( response.status ).to eq( 200 )
    end

    it 'returns an array with all pins' do
      expect( data ).to be_a Array
    end

    it 'should return all the pins' do
      expect( data ).to eq Pin.all
    end

  end

end
