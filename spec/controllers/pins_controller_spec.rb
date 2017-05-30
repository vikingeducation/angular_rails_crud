require 'rails_helper'

RSpec.describe PinsController, type: :controller do
  let(:user){ FactoryGirl.create(:user)}
  let(:pin){ FactoryGirl.create(:pin, user: user)}

  let(:json){ JSON.parse(response.body) }

  describe 'GET #index' do
    before do
      get :index, format: :json
    end

    it 'responds successfully' do
      expect(response).to be_success
    end

    it 'responds with JSON' do
      expect(json).to be_an Array
    end

  end

  describe 'GET #show' do
    before do
      get :show, params: { id: pin.id }, format: :json
    end

    it "should return the right pin" do
      expect(json["id"]).to eq(pin.id)
    end

    it "should return the right item_name" do
      expect(json["item_name"]).to eq(pin.item_name)
    end

    it "should return the right pin" do
      expect(json["buy_sell"]).to eq(pin.buy_sell)
    end

    it "should return the right pin" do
      expect(json["description"]).to eq(pin.description)
    end

  end

  describe "POST #create" do
    it "create the pin" do
      
    end

  end


end
