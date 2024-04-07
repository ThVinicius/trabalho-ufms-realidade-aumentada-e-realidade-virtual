import { MemberCard } from '../../components/member-card'
import { membersData } from './data'

export default function Members() {
  return (
    <main className="w-full h-[calc(100%-5rem)] overflow-y-auto overflow-x-hidden">
      <section className="section-main w-full h-fit flex flex-col gap-10 mt-24">
        <h1 className="text-white font-ArchivoBlack text-3xl text-center">
          Membros do grupo
        </h1>
        <div className="flex items-center justify-center flex-wrap">
          {membersData.map(({ id, ...member }) => (
            <MemberCard key={id} {...member} id={`${id}`} />
          ))}
        </div>
      </section>
    </main>
  )
}
