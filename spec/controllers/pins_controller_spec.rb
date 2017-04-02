require 'rails_helper'

RSpec.describe PinsController, type: :controller do


  let!(:pin){ FactoryGirl.create(:pin) }
  let(:json) { JSON.parse(response.body) }

  describe "GET /pins" do

    before do
      FactoryGirl.create_list(:pin, 9)
      get :index, format: :json
    end

    it "should return all the pins" do
      byebug
      expect(json.length).to eq(9)
    end


  end


end