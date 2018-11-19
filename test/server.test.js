const expect = require('expect');
const request = require('supertest');

const {chat} = require('./../server');
const {user} = require('./../models/user');

beforeEach((done) => {
    user.remove({}).then(() => done());
});

describle('POST /user', () => {
    it('should create a new user', (done) => {
        var text = 'test';

        request(chat)
            .post('/user')
            .send({text})
            .expect(200)
            .expect(res.body.text).toBe(text);
    })
    .end((err, res) => {
        if(err) {
            return done(err);
        }

        user.find().then((users) => {
            expect(users.length).toBE(1);
            expect(users[0].tex)
        })
    });
});