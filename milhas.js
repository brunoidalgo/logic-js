let porcentagemDesconto = 0

quantidadeMilhas = 6000

if (quantidadeMilhas > 5000) {
  porcentagemDesconto = porcentagemDesconto + 10
  console.log(`Seu desconto é de: ${porcentagemDesconto}%`)
} else if (quantidadeMilhas >= 30000) {
  porcentagemDesconto = porcentagemDesconto + 20
  console.log(`Seu desconto é de: ${porcentagemDesconto}%`)
} else {
  porcentagemDesconto = 0
  console.log(`Seu desconto é de: ${porcentagemDesconto}%`)
}
