require 'rails_helper'

describe PinsController do

  let(:pin){ FactoryGirl.create(:pin) }
  let(:user){ FactoryGirl.create(:user) }
  let(:json){ JSON.parse(response.body) }
  # let(:user) { User.create(username: 'a user') }
  # let(:pin) { Pin.create( item_name: 'Test pin title', description: 'Test description', buy_sell: true, user_id: user.id)}

  describe 'GET pins.json' do

    before do
      get :index, format: :json
    end

    it 'should return success status' do
      expect(response.status).to eq 200
    end

    it 'should return a json obj' do
      expect(json).to be_an Array
    end
  end

  describe 'POST pins.json' do

    before do
      user
      post :create, params: { pin: { item_name: 'Test title', description: 'Test description', buy_sell: false }, format: :json }
    end

    it 'should return 200 status' do
      expect(response.status).to eq 200
    end

    it 'should return json' do
      expect(json).to be_a Hash
    end
  end

  describe 'GET pins/:id.json' do

    let(:pin) { Pin.create( item_name: 'Test pin title', description: 'Test description', buy_sell: true, user_id: user.id)}

    before do
      pin
      get :show, params: { id: pin.id, format: :json }
    end

    it 'should return success status' do
      expect(response.status).to eq 200
    end

    it 'should return json' do
      expect(json).to be_a Hash
    end

    it 'should return correct pin id' do
      expect(json["id"]).to eq(pin.id)
    end

  end

  describe 'PUT pins/:id.json' do
    let(:updated_title) { '2nd pin title' }

    before { pin }
    before { user }


    context "with valid attributes" do

      pinID = id

      it 'changes the title' do
        # originalTitle = pin.item_name
        # attrs {user_id: user.id, item_name: updated_title: }
        pin
        user
        put :update, id: pin.id, item_name: updated_title
        # , params: { pin: { id: pin.id, item_name: updated_title } }
        # expect(json).to be_a Hash
        # expect(originalTitle).to not eq(pin.item_name)
        expect(pin.item_name).to eq(updated_title)


      end
    end
    #
    # before(:each) do
    #   pin
    #   put :show, id: pin.id, item_name: '2nd pin title', description: '2nd description', buy_sell: true, user_id: user.id
    #   pin.reload
    # end

  end

  #   it 'should return success status' do
  #     expect(response.status).to eq 200
  #   end
  #
  #   it 'should return json' do
  #     expect(json).to be_a Hash
  #   end
  #
  #   it 'should return original pin id' do
  #     expect(json["id"]).to eq(pin.id)
  #   end
  #
  #   it 'should have new title' do
  #     expect(pin.item_name).to eq(attr[:item_name])
  #
  #   end
  #
  # end

end
