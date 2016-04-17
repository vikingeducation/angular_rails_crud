require 'rails_helper'

RSpec.describe PinsController, type: :controller do

  let(:pin) { create(:pin) }
  let(:json) { JSON.parse( response.body ) }

  describe "GET /pins" do
    before do
      pin
      get :index, format: :json
    end

    it "returns http success" do
      expect(response).to have_http_status(200)
    end

    it "returns valid JSON" do
      expect(json[0]).to be_a Hash
    end
  end

  describe "GET /pins/:id" do
    before do
      get :show, id: pin.id, format: :json
    end

    it "returns the pin with the correct id" do
      expect(json['id']).to eq(pin.id)
    end
  end

  describe "POST /pins" do
    before do
      pin
    end

    it "creates a new pin, returns that pin" do
      post_data = {format: :json, pin: attributes_for(:pin)}

      expect{ post :create, post_data }.to change(Pin, :count).by(1)
      expect(json['item_name']).to eq(pin.item_name)
    end

    it "returns 422 error if pin data is invalid" do
      post_data = {format: :json, pin: {item_name: "bogus"}}

      expect{ post :create, post_data }.not_to change(Pin, :count)
      expect(response).to have_http_status(422)
    end
  end

  describe "PUT /pins/:id" do
    before do
      pin_data = attributes_for(:pin)
      pin_data["item_name"] = "new name"
      put :update, id: pin.id, pin: pin_data, format: :json
    end

    it "updates an existing pin, returns that pin" do
      expect(response).to have_http_status(200)
      expect(json["id"]).to eq(pin.id)
    end

    it "actually updates the pin" do
      expect(json["item_name"]).to eq("new name")
    end

    it "returns 422 error if pin data is invalid" do
      pin_data = attributes_for(:pin)
      pin_data["item_name"] = ""
      put :update, id: pin.id, pin: pin_data, format: :json

      expect(response).to have_http_status(422)
    end
  end

  describe "DELETE /pins/:id" do
    it "removes the existing pin" do
      pin
      expect{ delete :destroy, id: pin.id, format: :json }.to change(Pin, :count).by(-1)
    end
  end

end
