require 'rails_helper'

RSpec.describe PinsController, type: :controller do

  let(:pins) { create_list(:pin, 5) }

  let(:json) { JSON.parse(response.body) }

  describe "GET / pins" do

    let(:pin) { create(:pin, item_name: "Junky") }

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

end
