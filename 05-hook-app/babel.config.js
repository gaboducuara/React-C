module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true, babel: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],
};