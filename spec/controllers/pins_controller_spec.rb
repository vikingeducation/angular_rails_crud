require 'rails_helper'

RSpec.describe PinsController, type: :controller do

  let(:user) {create(:user)}
  let(:pins) { create_list(:pin, 5) }
  let(:pin) { create(:pin, item_name: "Junky") }
  let(:json) { JSON.parse(response.body) }

  describe "GET /pins" do

    before do
      pins
      pin
      get :index, format: :json
    end

    it "should return pins collection" do
      expect(json.length).to eq 6
    end

    it "should return pin with attributes" do
      expect(json[5]["item_name"]).to eq "Junky"
    end

  end

  describe "GET /pins/:id" do

    before do
      pin
      get :show, id: 1, format: :json
    end

    it "should return pin of id 1" do
      expect(json["id"]).to eq 1
    end

    it "should return a pin with item name" do
      expect(json["item_name"]).to eq "Junky"
    end

  end

  describe "POST /pins" do

    before do
      user
      post :create, pin: attributes_for(:pin, item_name: "Super Junky"), format: :json
    end

    it "should return created pin" do
      expect(json["item_name"]).to eq "Super Junky"
    end

    it "should create item in database" do
      expect(Pin.all.length).to eq 1
    end

  end

  describe "PUT /pins/:id" do

    before do
      pin
      put :update, id: 1, pin: {item_name: "Real Junky"}, format: :json
    end

    it "should edit the pin name" do
      expect(json["item_name"]).to eq "Real Junky"
    end

  end

  describe "DELETE /pins/:id" do

    before do
      pin
      delete :destroy, id: 1, format: :json
    end

    it "should return a status = 200" do
      expect(response.status).to eq 200
    end

    it "should destroy item in database" do
      expect(Pin.all.length).to eq 0
    end

  end



end
