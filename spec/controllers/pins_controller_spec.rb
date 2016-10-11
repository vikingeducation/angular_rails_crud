require 'rails_helper'


describe PinsController do 


  describe "GET #index" do

    let(:json){ JSON.parse(response.body) } 

    before do 
      get 'index', format: :json
    end

    it "responds successfully" do 

      expect(response).to have_http_status(:success)
    end

    it "returns valid json" do 
      expect(json).to be_a Array
    end


    context "the first object has an id" do 
      expect(json.first["id"]).to be_a Integer
    end


  end



end