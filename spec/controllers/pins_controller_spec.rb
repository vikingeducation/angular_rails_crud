require 'rails_helper'

RSpec.describe PinsController, type: :controller do

  let(:pin){ create(:pin) }

  describe "GET /pins/index.json" do

    let(:json){ JSON.parse(response.body) }

    before do
      get :index, format: :json
    end

    it 'should respond with a success' do
    expect( response.status ).to eq( 200 )
    end

    # You want to know that this JSON can be parsed
    it 'returns a valid JSON object' do
      expect( json ).to be_a Array
    end

    it 'should return all the pins' do
      expect(json).to eq Pin.all
    end
  end

end
